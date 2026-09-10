import React from "react";
import { motion } from "motion/react";
import { HiOutlineMusicNote } from "react-icons/hi";
import { FaBasketballBall } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const achievements = [
  {
    Icon: HiOutlineMusicNote,
    title: "Piano — Grade 5",
    detail:
      "Certified by Trinity College London for music theory and performance.",
    accent: "from-cyan-400 to-sky-500",
  },
  {
    Icon: FaBasketballBall,
    title: "Sports",
    detail:
      "Represented IIIT Dharwad at the Inter Sports Meet 2024 (3rd place) and finished 2nd in the Intra Sports Basketball Tournament 2024.",
    accent: "from-violet-400 to-fuchsia-500",
  },
  {
    Icon: SiLeetcode,
    title: "200+ LeetCode problems",
    detail:
      "Consistent problem solving across data structures and algorithms.",
    accent: "from-fuchsia-400 to-pink-500",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="scroll-mt-28 border-t border-white/5 py-24"
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-fuchsia-300/70">
          Off the clock
        </p>
        <h2 className="section-title">Leadership &amp; Achievements</h2>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-3">
        {achievements.map(({ Icon, title, detail, accent }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
            className="group glass-card relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
          >
            <span
              className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent} opacity-40 transition-opacity duration-300 group-hover:opacity-100`}
            />
            <div className="flex items-start gap-4">
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${accent} text-lg text-black`}
              >
                <Icon />
              </span>
              <div>
                <h3 className="text-lg font-medium text-neutral-100">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {detail}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
