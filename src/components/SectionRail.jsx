import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

const sections = [
  { id: "top", label: "Intro" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

/**
 * Right-edge rail: a gradient line that fills with page progress, with a tick
 * per section. The tick you're inside stretches out and names itself.
 */
const SectionRail = () => {
  const [active, setActive] = useState("top");
  const { scrollYProgress } = useScroll();
  const fill = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => {
      // the section whose top has most recently passed the upper third wins
      const line = window.innerHeight * 0.35;
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Section progress"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      {/* progress spine */}
      <span className="absolute right-[3px] top-0 h-full w-px bg-white/10" />
      <motion.span
        style={{ scaleY: fill }}
        className="absolute right-[3px] top-0 h-full w-px origin-top bg-gradient-to-b from-cyan-300 via-violet-400 to-fuchsia-400"
      />

      <ul className="flex flex-col items-end gap-5">
        {sections.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className="group flex items-center justify-end gap-3"
              >
                <span
                  className={`text-[10px] uppercase tracking-[0.25em] transition-all duration-300 ${
                    isActive
                      ? "translate-x-0 text-neutral-200 opacity-100"
                      : "translate-x-2 text-neutral-500 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  }`}
                >
                  {label}
                </span>
                <span
                  className={`block h-px transition-all duration-300 ${
                    isActive
                      ? "w-6 bg-gradient-to-r from-cyan-300 to-fuchsia-400"
                      : "w-3 bg-white/25 group-hover:w-5 group-hover:bg-white/50"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SectionRail;
