/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "motion/react";

/* keep a value looping inside a range without ever snapping */
const wrap = (min, max, value) => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

/**
 * A band of text that drifts on its own, but reads your scroll: it accelerates
 * with scroll speed and reverses direction when you scroll back up. Scroll
 * velocity drives the motion, so the page feels physical rather than stepped.
 */
const Row = ({ children, baseVelocity, outlined }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1200], [0, 4], {
    clamp: false,
  });

  // four copies of the content are laid out, so wrapping over 25% is seamless
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // scrolling down pushes the text one way, scrolling up flips it
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex flex-nowrap overflow-hidden whitespace-nowrap">
      <motion.div className="flex flex-nowrap whitespace-nowrap" style={{ x }}>
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`block pr-8 text-5xl font-light tracking-tight sm:text-7xl lg:text-8xl ${
              outlined ? "text-transparent" : "text-neutral-200"
            }`}
            style={
              outlined
                ? { WebkitTextStroke: "1px rgba(255,255,255,0.22)" }
                : undefined
            }
          >
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const VelocityMarquee = () => (
  <section
    aria-hidden="true"
    className="relative left-1/2 w-screen -translate-x-1/2 select-none border-y border-white/5 py-14"
  >
    {/* edges fade into the page so the band never looks cropped */}
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent sm:w-48" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent sm:w-48" />

    <Row baseVelocity={-2.5}>
      <span className="gradient-text">AI Agents</span>
      <span className="px-6 text-neutral-700">/</span>
      Retrieval-Augmented Generation
      <span className="px-6 text-neutral-700">/</span>
      <span className="gradient-text">Full Stack</span>
      <span className="px-6 text-neutral-700">/</span>
    </Row>
    <Row baseVelocity={2.5} outlined>
      FastAPI
      <span className="px-6">·</span>
      Next.js
      <span className="px-6">·</span>
      Docker
      <span className="px-6">·</span>
      AWS EC2
      <span className="px-6">·</span>
      Cloudflare
      <span className="px-6">·</span>
    </Row>
  </section>
);

export default VelocityMarquee;
