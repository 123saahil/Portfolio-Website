import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/saahilmishra/",
    label: "LinkedIn",
  },
  { icon: FaGithub, href: "https://github.com/123saahil", label: "GitHub" },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/saahil.xx/",
    label: "Instagram",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto max-w-6xl px-4 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 ${
            scrolled
              ? "border-white/10 bg-black/60 shadow-card backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <Logo />

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative rounded-lg px-3 py-2 text-sm text-neutral-400 transition-colors hover:text-neutral-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-lg text-lg text-neutral-400 transition-all hover:bg-white/5 hover:text-cyan-300"
              >
                <Icon />
              </a>
            ))}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="ml-1 grid h-9 w-9 place-items-center rounded-lg text-xl text-neutral-300 transition-colors hover:bg-white/5 md:hidden"
            >
              {open ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="mt-2 grid gap-1 rounded-2xl border border-white/10 bg-black/80 p-2 backdrop-blur-xl md:hidden"
            >
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-neutral-300 transition-colors hover:bg-white/5 hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
