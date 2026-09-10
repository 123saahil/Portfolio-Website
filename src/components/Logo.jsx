import React from "react";

const Logo = () => (
  <a
    href="#top"
    aria-label="Saahil Mishra — back to top"
    className="group flex flex-shrink-0 items-center gap-2 text-lg font-semibold tracking-tight text-neutral-100"
  >
    <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 text-sm font-bold text-black shadow-glow transition-transform duration-300 group-hover:scale-105">
      SM
    </span>
    <span className="hidden sm:inline">
      Saahil<span className="text-neutral-500 transition-colors duration-300 group-hover:text-cyan-300">.dev</span>
    </span>
  </a>
);

export default Logo;
