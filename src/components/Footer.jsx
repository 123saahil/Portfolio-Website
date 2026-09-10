import React from "react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-between gap-4 text-xs text-neutral-500 sm:flex-row"
      >
        <p>© {new Date().getFullYear()} Saahil Mishra. All rights reserved.</p>
        <p className="flex items-center gap-2">
          Built with React, Tailwind CSS &amp; Framer Motion
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400" />
        </p>
        <a
          href="#top"
          className="transition-colors hover:text-neutral-200"
        >
          Back to top ↑
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;
