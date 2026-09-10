import React from "react";
import { motion } from "motion/react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoDocker } from "react-icons/bi";
import {
  HiOutlineCode,
  HiOutlineGlobeAlt,
  HiOutlineDatabase,
  HiOutlineCloud,
  HiOutlineChip,
  HiOutlineLockClosed,
} from "react-icons/hi";
import {
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiTailwindcss,
  SiExpress,
  SiFastapi,
  SiTypescript,
  SiCplusplus,
  SiCloudflare,
  SiGithubactions,
  SiGooglegemini,
  SiAmazonec2,
} from "react-icons/si";

/* floating marquee of the tools I reach for most */
const marquee = [
  { name: "React", Icon: RiReactjsLine, color: "text-cyan-400", duration: 2.4 },
  { name: "Next.js", Icon: TbBrandNextjs, color: "text-neutral-100", duration: 3 },
  { name: "TypeScript", Icon: SiTypescript, color: "text-blue-400", duration: 2.7 },
  { name: "Node.js", Icon: IoLogoNodejs, color: "text-green-500", duration: 2.3 },
  { name: "Express", Icon: SiExpress, color: "text-neutral-200", duration: 3.4 },
  { name: "FastAPI", Icon: SiFastapi, color: "text-teal-400", duration: 3.6 },
  { name: "Python", Icon: SiPython, color: "text-yellow-400", duration: 2.9 },
  { name: "C++", Icon: SiCplusplus, color: "text-blue-500", duration: 2.2 },
  { name: "Tailwind", Icon: SiTailwindcss, color: "text-sky-400", duration: 2.6 },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "text-sky-600", duration: 3.2 },
  { name: "MongoDB", Icon: SiMongodb, color: "text-emerald-500", duration: 2.5 },
  { name: "Prisma", Icon: SiPrisma, color: "text-teal-300", duration: 4.6 },
  { name: "Docker", Icon: BiLogoDocker, color: "text-blue-400", duration: 2 },
  { name: "AWS EC2", Icon: SiAmazonec2, color: "text-orange-400", duration: 3.8 },
  { name: "Cloudflare", Icon: SiCloudflare, color: "text-orange-500", duration: 4.2 },
  { name: "GitHub Actions", Icon: SiGithubactions, color: "text-indigo-400", duration: 3.1 },
  { name: "Gemini API", Icon: SiGooglegemini, color: "text-violet-400", duration: 2.8 },
];

/* the full stack, grouped the way I actually think about it */
const groups = [
  {
    label: "Languages",
    Icon: HiOutlineCode,
    accent: "from-cyan-400 to-sky-500",
    items: ["C++", "Python", "C", "TypeScript", "JavaScript"],
  },
  {
    label: "Web Development",
    Icon: HiOutlineGlobeAlt,
    accent: "from-sky-400 to-violet-500",
    items: [
      "React.js",
      "Next.js",
      "FastAPI",
      "Node.js",
      "Express.js",
      "Hono.js",
      "HTML",
      "CSS",
      "TailwindCSS",
    ],
  },
  {
    label: "Databases",
    Icon: HiOutlineDatabase,
    accent: "from-violet-400 to-purple-500",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"],
  },
  {
    label: "Cloud & DevOps",
    Icon: HiOutlineCloud,
    accent: "from-purple-400 to-fuchsia-500",
    items: [
      "Docker",
      "Git",
      "GitHub Actions",
      "AWS EC2",
      "Cloudflare Workers",
      "Vercel",
    ],
  },
  {
    label: "AI & LLMs",
    Icon: HiOutlineChip,
    accent: "from-fuchsia-400 to-pink-500",
    items: [
      "Gemini API",
      "Retrieval-Augmented Generation",
      "AI Agents",
      "MCP",
    ],
  },
  {
    label: "Authentication",
    Icon: HiOutlineLockClosed,
    accent: "from-pink-400 to-rose-500",
    items: ["JWT", "NextAuth"],
  },
];

const iconVariants = (duration) => ({
  initial: { y: -8 },
  animate: {
    y: [-8, 8],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <section id="stack" className="scroll-mt-28 border-t border-white/5 py-24">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-cyan-300/70">
          Toolbox
        </p>
        <h2 className="section-title">Technical Skills</h2>
      </motion.div>

      <div className="mb-16 grid grid-cols-3 gap-3 sm:grid-cols-5 sm:gap-4 lg:grid-cols-6">
        {marquee.map(({ name, Icon, color, duration }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
            className="group relative"
          >
            <div className="glass-card flex flex-col items-center gap-3 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]">
              <motion.span
                variants={iconVariants(duration)}
                initial="initial"
                animate="animate"
                className="block"
              >
                <Icon className={`text-3xl sm:text-4xl ${color}`} />
              </motion.span>
              <span className="text-center text-[11px] text-neutral-400 transition-colors group-hover:text-neutral-200 sm:text-xs">
                {name}
              </span>
            </div>
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-violet-500/20 to-fuchsia-500/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ label, Icon, accent, items }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
            className="group glass-card relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
          >
            <span
              className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent} opacity-40 transition-opacity duration-300 group-hover:opacity-100`}
            />
            <div className="flex items-center gap-3">
              <span
                className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${accent} text-lg text-black`}
              >
                <Icon />
              </span>
              <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-300">
                {label}
              </h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-neutral-400 transition-colors group-hover:border-white/20 group-hover:text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
