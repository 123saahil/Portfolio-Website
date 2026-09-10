import React from "react";
import { motion } from "motion/react";
import { HiOutlineBriefcase } from "react-icons/hi";

const experience = [
  {
    role: "AI Engineer I",
    company: "MathCo",
    period: "May 2026 — Present",
    current: true,
    accent: "from-cyan-400 to-violet-500",
    summary:
      "Healthcare analytics for a Fortune 500 pharmaceutical client — AI-driven analysis of patient cohorts, treatment journeys and therapy progression.",
    points: [
      "Designed and built a multi-skill AI agent that grounds natural-language business queries in a semantic ontology, resolving free-text terms into canonical business entities to generate accurate demand forecasts.",
      "Architected a Git-based collaboration workflow for shared AI agent skills — branch-per-ticket development, pull-request reviews and repository conventions — cutting feature integration time and enabling parallel work across contributors.",
    ],
    stack: ["AI Agents", "RAG", "Semantic Ontology", "Python", "Git"],
  },
  {
    role: "Product Engineer Intern",
    company: "MathCo",
    period: "Jan 2026 — Apr 2026",
    accent: "from-violet-400 to-fuchsia-500",
    summary:
      "Enhanced NucliOS, MathCo's proprietary enterprise AI and analytics platform.",
    points: [
      "Resolved critical frontend issues and shipped documentation features — PDF export, search improvements, sticky headers and active-section highlighting — improving usability and platform reliability.",
    ],
    stack: ["React.js", "TypeScript", "Frontend", "Enterprise SaaS"],
  },
  {
    role: "Software Engineer Intern",
    company: "GalaxyAI Inc",
    period: "May 2025 — Jul 2025",
    accent: "from-fuchsia-400 to-pink-500",
    summary:
      "Large-scale web application powering 3000+ AI-driven tools.",
    points: [
      "Debugged and resolved high-priority issues across the platform, enhancing stability by 30%.",
      "Implemented fixes for UI glitches, frontend errors and data inconsistencies, reducing bug recurrence and improving overall system reliability.",
    ],
    stack: ["JavaScript", "React.js", "Debugging", "Web Platform"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-28 border-t border-white/5 py-24"
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-cyan-300/70">
          Where I&apos;ve worked
        </p>
        <h2 className="section-title">Experience</h2>
      </motion.div>

      <div className="mx-auto max-w-4xl">
        {experience.map((job, index) => (
          <motion.article
            key={`${job.role}-${job.period}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group glass-card relative mb-5 overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 sm:p-8"
          >
            <span
              className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${job.accent} opacity-40 transition-opacity duration-300 group-hover:opacity-100`}
            />

            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${job.accent} text-lg text-black`}
                >
                  <HiOutlineBriefcase />
                </span>
                <div>
                  <h3 className="text-xl font-medium text-neutral-100 sm:text-2xl">
                    {job.role}
                  </h3>
                  <p
                    className={`mt-1 bg-gradient-to-r ${job.accent} bg-clip-text text-sm font-medium text-transparent`}
                  >
                    {job.company}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-neutral-400">
                {job.current && (
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-emerald-400" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                )}
                {job.period}
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-neutral-300">
              {job.summary}
            </p>

            <ul className="mt-4 space-y-3">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-neutral-400">
                  <span
                    className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${job.accent}`}
                  />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {job.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-neutral-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
