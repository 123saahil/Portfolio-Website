import React from "react";
import { motion } from "motion/react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const cards = [
  {
    Icon: HiOutlineMail,
    label: "Email",
    value: "saahilmishra016@gmail.com",
    href: "mailto:saahilmishra016@gmail.com",
    accent: "hover:border-cyan-300/50 hover:text-cyan-200",
  },
  {
    Icon: HiOutlinePhone,
    label: "Phone",
    value: "+91 63028 33695",
    href: "tel:+916302833695",
    accent: "hover:border-fuchsia-300/50 hover:text-fuchsia-200",
  },
  {
    Icon: HiOutlineLocationMarker,
    label: "Location",
    value: "Bengaluru, India",
    accent: "hover:border-white/30",
  },
];

const socials = [
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/123saahil",
  },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saahilmishra/",
  },
  {
    Icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/saahil.xx/",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-28 border-t border-white/5 py-24">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-cyan-300/70">
          Say hello
        </p>
        <h2 className="section-title">Get in touch</h2>
        <p className="mx-auto mt-5 max-w-xl text-balance text-sm text-neutral-400 sm:text-base">
          Hiring, collaborating, or just want to argue about databases? My inbox
          is open.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
        {cards.map(({ Icon, label, value, href, accent }, index) => {
          const Wrapper = href ? "a" : "div";
          return (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <Wrapper
                {...(href ? { href } : {})}
                className={`glass-card flex h-full items-center gap-3 p-5 text-neutral-300 transition-all duration-300 hover:-translate-y-1 ${accent}`}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-lg">
                  <Icon />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-[0.2em] text-neutral-500">
                    {label}
                  </span>
                  <span className="mt-1 block break-words text-sm">
                    {value}
                  </span>
                </span>
              </Wrapper>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 flex justify-center gap-3"
      >
        {socials.map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-xl text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:text-white"
          >
            <Icon className="transition-transform group-hover:scale-110" />
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
