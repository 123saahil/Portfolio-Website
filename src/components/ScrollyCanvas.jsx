import React, { useEffect, useMemo, useRef } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import Overlay from "./Overlay";

/**
 * Scroll-linked hero.
 *
 * The blueprint calls for a canvas image-sequence scrub; with no frame assets
 * on disk we render the "sequence" procedurally instead — a point cloud that
 * morphs sphere -> torus -> grid as scroll progress goes 0 -> 1. Same mechanic
 * (scroll drives frame state, canvas does the painting), zero image payload.
 */

const POINT_COUNT = 720;
const NEIGHBOURS_PER_POINT = 1;
const BG = "#0a0a0f";

const lerp = (a, b, t) => a + (b - a) * t;
const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

/* ---------- formations: three sets of 3D positions, one per "act" ---------- */

const buildSphere = (count) => {
  const points = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    points.push([
      Math.cos(theta) * radius * 200,
      y * 200,
      Math.sin(theta) * radius * 200,
    ]);
  }
  return points;
};

const buildTorus = (count) => {
  const points = [];
  const R = 200;
  const r = 72;
  for (let i = 0; i < count; i++) {
    const u = (i / count) * Math.PI * 2 * 7;
    const v = (i / count) * Math.PI * 2 * 23;
    points.push([
      (R + r * Math.cos(v)) * Math.cos(u),
      r * Math.sin(v),
      (R + r * Math.cos(v)) * Math.sin(u),
    ]);
  }
  return points;
};

const buildGrid = (count) => {
  const points = [];
  const side = Math.ceil(Math.sqrt(count));
  const spacing = 760 / side;
  for (let i = 0; i < count; i++) {
    const col = i % side;
    const row = Math.floor(i / side);
    const x = (col - side / 2) * spacing;
    const z = (row - side / 2) * spacing;
    const y = Math.sin(col * 0.45) * 26 + Math.cos(row * 0.45) * 26 + 60;
    points.push([x, y, z]);
  }
  return points;
};

/* neighbour pairs, computed once off the sphere formation */
const buildEdges = (points) => {
  const edges = [];
  for (let i = 0; i < points.length; i++) {
    const scored = [];
    for (let j = 0; j < points.length; j++) {
      if (i === j) continue;
      const dx = points[i][0] - points[j][0];
      const dy = points[i][1] - points[j][1];
      const dz = points[i][2] - points[j][2];
      scored.push([dx * dx + dy * dy + dz * dz, j]);
    }
    scored.sort((a, b) => a[0] - b[0]);
    for (let k = 0; k < NEIGHBOURS_PER_POINT; k++) {
      const j = scored[k][1];
      if (i < j) edges.push([i, j]);
    }
  }
  return edges;
};

const ScrollyCanvas = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const targetProgress = useRef(0);
  const smoothProgress = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    targetProgress.current = v;
  });

  const formations = useMemo(() => {
    const sphere = buildSphere(POINT_COUNT);
    return {
      sphere,
      torus: buildTorus(POINT_COUNT),
      grid: buildGrid(POINT_COUNT),
      edges: buildEdges(sphere),
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let frame;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const { sphere, torus, grid, edges } = formations;
    const projected = new Array(POINT_COUNT);

    const render = (time) => {
      // ease the scrub so fast flicks still feel filmic
      smoothProgress.current = lerp(
        smoothProgress.current,
        targetProgress.current,
        reduceMotion ? 1 : 0.08
      );
      const p = smoothProgress.current;

      // background + ambient glow (canvas is full-bleed "cover")
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const glow = ctx.createRadialGradient(
        cx,
        cy * 0.85,
        0,
        cx,
        cy * 0.85,
        Math.max(width, height) * 0.65
      );
      glow.addColorStop(0, `rgba(109, 40, 217, ${0.3 + p * 0.14})`);
      glow.addColorStop(0.55, "rgba(34, 211, 238, 0.07)");
      glow.addColorStop(1, "rgba(10, 10, 15, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // morph: act 1 sphere->torus, act 2 torus->grid
      const stage = p * 2;
      const from = stage < 1 ? sphere : torus;
      const to = stage < 1 ? torus : grid;
      const blend = easeInOut(Math.min(1, stage < 1 ? stage : stage - 1));

      const t = reduceMotion ? 0 : time * 0.0001;
      const rotY = p * Math.PI * 2.4 + t;
      // tilt from head-on to looking down, so the closing grid reads as a plane
      const rotX = 0.12 + easeInOut(p) * 0.85;
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // cover-style scale: always fills the shorter axis nicely
      const scale = Math.min(width, height) / 430;
      const focal = 900;
      const camZ = 520 - p * 90;

      for (let i = 0; i < POINT_COUNT; i++) {
        const a = from[i];
        const b = to[i];
        const x0 = lerp(a[0], b[0], blend);
        const y0 = lerp(a[1], b[1], blend);
        const z0 = lerp(a[2], b[2], blend);

        const x1 = x0 * cosY - z0 * sinY;
        const z1 = x0 * sinY + z0 * cosY;
        const y1 = y0 * cosX - z1 * sinX;
        const z2 = y0 * sinX + z1 * cosX;

        const depth = focal / (focal + z2 + camZ);
        projected[i] = [
          cx + x1 * depth * scale,
          cy + y1 * depth * scale,
          depth,
        ];
      }

      // network lines
      ctx.lineWidth = 1;
      for (let e = 0; e < edges.length; e++) {
        const [i, j] = edges[e];
        const a = projected[i];
        const b = projected[j];
        const dx = a[0] - b[0];
        const dy = a[1] - b[1];
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 150) continue;
        const alpha = (1 - dist / 150) * 0.42 * a[2];
        ctx.strokeStyle = `rgba(160, 175, 255, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(a[0], a[1]);
        ctx.lineTo(b[0], b[1]);
        ctx.stroke();
      }

      // points
      for (let i = 0; i < POINT_COUNT; i++) {
        const [x, y, depth] = projected[i];
        const hue = 188 + (i / POINT_COUNT) * 110 + p * 30;
        const radius = Math.max(0.6, depth * 2.6);
        ctx.fillStyle = `hsla(${hue}, 92%, ${62 + depth * 12}%, ${
          0.3 + depth * 0.7
        })`;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      frame = window.requestAnimationFrame(render);
    };

    frame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [formations]);

  return (
    <section ref={containerRef} id="top" className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        />
        {/* vignette so overlay copy always sits on contrast */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_50%,transparent_35%,rgba(5,5,10,0.85)_100%)]" />
        <Overlay progress={scrollYProgress} />
      </div>
    </section>
  );
};

export default ScrollyCanvas;
