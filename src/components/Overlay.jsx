/* eslint-disable react/prop-types */
import React from "react";
import { motion, useTransform } from "motion/react";
import { HiArrowDown } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

/**
 * Parallax copy that rides on top of the scroll-scrubbed canvas.
 * Each act fades in and out across its own slice of scroll progress and
 * drifts at a different speed than the scroll itself.
 */
const Overlay = ({ progress }) => {
  const actOneOpacity = useTransform(progress, [0, 0.1, 0.18], [1, 1, 0]);
  const actOneY = useTransform(progress, [0, 0.18], [0, -120]);
  const actOneScale = useTransform(progress, [0, 0.18], [1, 0.92]);

  const actTwoOpacity = useTransform(
    progress,
    [0.24, 0.32, 0.44, 0.52],
    [0, 1, 1, 0]
  );
  const actTwoY = useTransform(progress, [0.24, 0.52], [90, -90]);

  const actThreeOpacity = useTransform(
    progress,
    [0.56, 0.64, 0.76, 0.84],
    [0, 1, 1, 0]
  );
  const actThreeY = useTransform(progress, [0.56, 0.84], [110, -70]);

  const actFourOpacity = useTransform(progress, [0.88, 0.96], [0, 1]);
  const actFourY = useTransform(progress, [0.88, 1], [60, 0]);

  const cueOpacity = useTransform(progress, [0, 0.05], [1, 0]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="mx-auto flex h-full max-w-6xl items-center px-6">
        {/* Act 1 — centred introduction */}
        <motion.div
          style={{ opacity: actOneOpacity, y: actOneY, scale: actOneScale }}
          className="absolute inset-x-0 flex flex-col items-center px-6 text-center"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-neutral-300 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            AI Engineer @ MathCo
          </span>
          <h1 className="text-5xl font-thin leading-[1.05] tracking-tight text-neutral-100 sm:text-8xl lg:text-9xl">
            Saahil <span className="gradient-text font-light">Mishra</span>
          </h1>
          <p className="mt-7 text-[11px] font-light tracking-[0.22em] text-neutral-400 sm:mt-6 sm:text-xl sm:tracking-[0.28em]">
            AI ENGINEER · FULL STACK DEVELOPER
          </p>
        </motion.div>

        {/* Act 2 — left aligned */}
        <motion.div
          style={{ opacity: actTwoOpacity, y: actTwoY }}
          className="absolute inset-x-0 px-6 sm:px-10"
        >
          <div className="max-w-xl">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-300/70">
              01 — What I do
            </p>
            <h2 className="text-4xl font-light leading-tight text-neutral-100 sm:text-6xl">
              I build digital
              <span className="gradient-text"> experiences.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-400 sm:text-base">
              React, Next.js, FastAPI and Hono on the surface. AI agents,
              retrieval pipelines and database internals underneath.
            </p>
          </div>
        </motion.div>

        {/* Act 3 — right aligned */}
        <motion.div
          style={{ opacity: actThreeOpacity, y: actThreeY }}
          className="absolute inset-x-0 flex justify-end px-6 sm:px-10"
        >
          <div className="max-w-xl text-right">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-fuchsia-300/70">
              02 — How I think
            </p>
            <h2 className="text-4xl font-light leading-tight text-neutral-100 sm:text-6xl">
              Bridging design
              <span className="gradient-text"> and engineering.</span>
            </h2>
            <p className="ml-auto mt-5 max-w-md text-sm leading-relaxed text-neutral-400 sm:text-base">
              Cloud-native by default — Docker, GitHub Actions, AWS EC2 and
              Cloudflare Workers — with a standing curiosity for RAG, MCP and
              cryptography.
            </p>
          </div>
        </motion.div>

        {/* Act 4 — handoff into the page */}
        <motion.div
          style={{ opacity: actFourOpacity, y: actFourY }}
          className="pointer-events-auto absolute inset-x-0 flex flex-col items-center px-6 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            03 — The work
          </p>
          <h2 className="text-4xl font-light text-neutral-100 sm:text-6xl">
            Seven projects, one obsession.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
            >
              Explore the work
              <HiArrowDown className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="https://github.com/123saahil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 text-sm text-neutral-200 backdrop-blur-sm transition-colors hover:border-cyan-300/40 hover:text-cyan-200"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/saahilmishra/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 text-sm text-neutral-200 backdrop-blur-sm transition-colors hover:border-violet-300/40 hover:text-violet-200"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        style={{ opacity: cueOpacity }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-neutral-500"
      >
        Scroll
        <span className="relative h-12 w-px overflow-hidden bg-white/10">
          <motion.span
            animate={{ y: [-48, 48] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-transparent via-cyan-300 to-transparent"
          />
        </span>
      </motion.div>
    </div>
  );
};

export default Overlay;
