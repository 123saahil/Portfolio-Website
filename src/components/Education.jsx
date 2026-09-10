import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { HiOutlineAcademicCap } from "react-icons/hi";

const educationList = [
  {
    institution: "Indian Institute of Information Technology, Dharwad",
    degree: "B.Tech. in Computer Science and Engineering",
    year: "2022 — 2026",
    grade: "CGPA 8.62 / 10",
    accent: "from-cyan-400 to-violet-500",
  },
  {
    institution: "St. Patrick's Junior College",
    degree: "Intermediate Education",
    year: "2022",
    grade: "97.7%",
    accent: "from-violet-400 to-fuchsia-500",
  },
  {
    institution: "Johnson Grammar School, CBSE",
    degree: "Secondary Education",
    year: "2020",
    grade: "97%",
    accent: "from-fuchsia-400 to-pink-500",
  },
];

const Education = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="education"
      className="scroll-mt-28 border-t border-white/5 py-24"
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-violet-300/70">
          Background
        </p>
        <h2 className="section-title">Education</h2>
      </motion.div>

      <div ref={containerRef} className="relative mx-auto max-w-3xl pl-10 sm:pl-16">
        {/* rail */}
        <div className="absolute left-3 top-2 h-full w-px bg-white/10 sm:left-6" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-3 top-2 h-full w-px origin-top bg-gradient-to-b from-cyan-300 via-violet-400 to-fuchsia-400 sm:left-6"
        />

        {educationList.map((item, index) => (
          <motion.div
            key={item.institution}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="relative mb-8 last:mb-0"
          >
            <span
              className={`absolute -left-[1.85rem] top-6 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br ${item.accent} text-[11px] text-black shadow-glow sm:-left-[2.6rem]`}
            >
              <HiOutlineAcademicCap />
            </span>

            <div className="glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-neutral-400">
                  {item.year}
                </span>
                <span
                  className={`bg-gradient-to-r ${item.accent} bg-clip-text text-xs font-medium text-transparent`}
                >
                  {item.grade}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-medium text-neutral-100 sm:text-2xl">
                {item.institution}
              </h3>
              <p className="mt-1 text-sm text-neutral-400">{item.degree}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
