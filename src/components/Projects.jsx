/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import shamir from "../assets/shamirs.png";
import worldenergy from "../assets/worldenergy.jpg";
import portfolio from "../assets/portfolio.png";
import ByteWrite from "../assets/ByteWrite.jpg";
import qubitconnect from "../assets/qubitconnect.jpeg";
import paytmwallet from "../assets/paytmwallet.png";
import legalchatbot from "../assets/legalchatbot.svg";

const projects = [
  {
    title: "Legal AI Chatbot",
    tagline: "Production RAG assistant for Indian law",
    image: legalchatbot,
    category: "AI / RAG",
    featured: true,
    description:
      "A production-ready AI legal assistant built on FastAPI with hybrid retrieval — FAISS dense vector search combined with BM25 keyword search — delivering citation-grounded answers across 1,700+ Indian legal sections via the Gemini API. Containerised with Docker and deployed on AWS EC2 for scalable, reproducible releases, with a GitHub Actions pipeline that tests, builds images and ships to EC2 on every push.",
    fit: "contain",
    tools: [
      "Python",
      "FastAPI",
      "FAISS",
      "BM25",
      "Gemini API",
      "Docker",
      "GitHub Actions",
      "AWS EC2",
    ],
    repo: "https://github.com/Chitrangana10/Legal-Chatbot",
  },
  {
    title: "Paytm Wallet",
    tagline: "Digital wallet & payments platform",
    image: paytmwallet,
    category: "Full Stack",
    description:
      "A secure wallet system with JWT-authenticated RESTful APIs supporting webhooks plus user-to-user and bank transactions. Built on a Turborepo monorepo housing both the Next.js frontend and Node.js backend, with a responsive UI for real-time wallet and transaction management.",
    tools: [
      "Next.js",
      "Node.js",
      "Express",
      "TailwindCSS",
      "MongoDB",
      "JWT",
      "Webhooks",
      "Turborepo",
    ],
  },
  {
    title: "QubitConnect",
    tagline: "Quantum internet simulator",
    image: qubitconnect,
    category: "Quantum",
    description:
      "Simulates a quantum internet of four interconnected nodes using the BB84 protocol for quantum key distribution. Entanglement and secure communication are visualised through an interactive React frontend, with backend logic powered by Node.js and Qiskit.",
    tools: ["React", "Node.js", "Qiskit", "Python"],
  },
  {
    title: "ByteWrite",
    tagline: "Edge-deployed blogging platform",
    image: ByteWrite,
    category: "Full Stack",
    description:
      "A full-stack blogging platform on a monorepo architecture, running Hono.js with Prisma ORM on Cloudflare Workers. JWT-based authentication guards protected routes and publishing workflows, and the responsive React frontend features AI-powered blog summary generation through the Gemini API.",
    tools: [
      "React.js",
      "Hono.js",
      "Prisma ORM",
      "Cloudflare Workers",
      "TailwindCSS",
      "Gemini API",
      "JWT",
    ],
  },
  {
    title: "File Shredder",
    tagline: "Shamir's Secret Sharing",
    image: shamir,
    category: "Security",
    description:
      "A web application for secure file encryption and shredding, using Shamir's Secret Sharing to split key material across shares. React frontend and Flask backend handle upload, encryption and key management.",
    tools: ["React", "Flask", "Cryptography", "Shamir's Secret Sharing"],
  },
  {
    title: "World Energy Consumption",
    tagline: "Predictive analytics dashboard",
    image: worldenergy,
    category: "Machine Learning",
    description:
      "A full-stack application that predicts global energy consumption from historical data and trends, letting users interact with the predictive model and explore results visually.",
    tools: ["React", "Python", "Pandas", "Matplotlib", "Machine Learning"],
  },
  {
    title: "Portfolio Website",
    tagline: "This site",
    image: portfolio,
    category: "Frontend",
    description:
      "A responsive personal site presenting skills, projects and contact information, animated with Framer Motion and styled with TailwindCSS.",
    tools: ["React", "Vite", "TailwindCSS", "Framer Motion"],
  },
];

const categories = ["All", ...new Set(projects.map((p) => p.category))];

const ProjectCard = ({ project, index }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
    className={`group glass-card relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-card ${
      project.featured ? "lg:col-span-2 lg:flex-row" : ""
    }`}
  >
    <div
      className={`relative overflow-hidden bg-[#0d0d15] ${
        project.featured ? "lg:w-1/2" : ""
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className={`aspect-video w-full transition-transform duration-500 group-hover:scale-105 ${
          project.fit === "contain"
            ? "object-contain p-2 lg:h-full lg:p-4"
            : "object-cover lg:h-full"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[11px] uppercase tracking-wider text-cyan-200 backdrop-blur-md">
        {project.category}
      </span>
      {project.featured && (
        <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-black">
          Latest
        </span>
      )}
    </div>

    <div
      className={`flex flex-1 flex-col p-6 ${
        project.featured ? "lg:w-1/2 lg:p-8" : ""
      }`}
    >
      <h3 className="text-xl font-medium text-neutral-100 sm:text-2xl">
        {project.title}
      </h3>
      <p className="mt-1 text-sm text-cyan-300/80">{project.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-neutral-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-neutral-400 transition-colors group-hover:border-white/20 group-hover:text-neutral-300"
          >
            {tool}
          </span>
        ))}
      </div>

      {(project.repo || project.demo) && (
        <div className="mt-6 flex flex-wrap items-center gap-3 pt-1">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-xs text-neutral-200 transition-colors hover:border-cyan-300/50 hover:text-cyan-200"
            >
              <FaGithub /> Source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-xs text-neutral-200 transition-colors hover:border-fuchsia-300/50 hover:text-fuchsia-200"
            >
              <HiOutlineExternalLink /> Live
            </a>
          )}
        </div>
      )}
    </div>
  </motion.article>
);

const Projects = () => {
  const [active, setActive] = useState("All");
  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="scroll-mt-28 border-t border-white/5 py-24">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-fuchsia-300/70">
          Selected work
        </p>
        <h2 className="section-title">Projects</h2>
      </motion.div>

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-1.5 text-xs transition-all ${
              active === category
                ? "border-cyan-300/50 bg-cyan-300/10 text-cyan-200"
                : "border-white/10 text-neutral-500 hover:border-white/25 hover:text-neutral-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 lg:grid-cols-2">
        {visible.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
