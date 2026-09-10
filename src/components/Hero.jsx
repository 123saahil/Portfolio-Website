import React from "react";
import profilePic from "../assets/saahilmishra.jpg";
import { motion } from "motion/react";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const stats = [
  { value: "8.62", label: "CGPA · IIIT Dharwad" },
  { value: "3", label: "Engineering roles" },
  { value: "200+", label: "LeetCode solved" },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const Hero = () => {
  return (
    <section
      id="about"
      className="relative scroll-mt-28 border-t border-white/5 py-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xs lg:max-w-sm"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-cyan-500/20 via-violet-500/20 to-fuchsia-500/20 blur-2xl" />
          <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-2 backdrop-blur-sm">
            <img
              src={profilePic}
              alt="Saahil Mishra"
              className="aspect-[4/5] w-full rounded-[1.4rem] object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-2 rounded-[1.4rem] ring-1 ring-inset ring-white/10" />
          </div>
          <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-black/70 px-4 py-2 text-xs text-neutral-300 backdrop-blur-md">
            <HiOutlineLocationMarker className="text-cyan-300" />
            AI Engineer @ MathCo · India
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col"
        >
          <motion.p
            variants={fadeUp(0)}
            className="mb-3 text-xs uppercase tracking-[0.35em] text-cyan-300/70"
          >
            About
          </motion.p>
          <motion.h2
            variants={fadeUp(0.08)}
            className="text-4xl font-light leading-tight tracking-tight text-neutral-100 sm:text-5xl"
          >
            I build AI systems that are
            <span className="gradient-text"> grounded, fast and production-ready.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp(0.16)}
            className="mt-6 max-w-xl text-balance text-base font-light leading-relaxed text-neutral-400"
          >
            I&apos;m an AI Engineer at MathCo and a 2026 Computer Science
            graduate of IIIT Dharwad. Day to day I build multi-skill AI agents
            and retrieval systems for healthcare analytics — grounding
            natural-language questions in a semantic ontology so the answers
            hold up against real business data.
          </motion.p>
          <motion.p
            variants={fadeUp(0.24)}
            className="mt-4 max-w-xl text-balance text-base font-light leading-relaxed text-neutral-400"
          >
            The other half of my work is full stack: React, Next.js, FastAPI,
            Node and Hono, with PostgreSQL and Prisma underneath, shipped
            through Docker, GitHub Actions, AWS EC2 and Cloudflare Workers.
            Outside the day job I keep pulling on threads in RAG, MCP,
            cryptography and quantum networking.
          </motion.p>

          <motion.dl
            variants={fadeUp(0.32)}
            className="mt-10 grid max-w-lg grid-cols-3 gap-3"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card px-4 py-4">
                <dt className="text-2xl font-semibold text-neutral-100">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-neutral-500">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div variants={fadeUp(0.4)} className="mt-8">
            <a
              href="mailto:saahilmishra016@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 text-sm text-neutral-200 backdrop-blur-sm transition-colors hover:border-cyan-300/40 hover:text-cyan-200"
            >
              <HiOutlineMail className="text-lg" />
              saahilmishra016@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
