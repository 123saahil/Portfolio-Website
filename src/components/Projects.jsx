import React from "react";
import shamir from "../assets/shamirs.png";
import worldenergy from "../assets/worldenergy.jpg";
import portfolio from "../assets/portfolio.png";
import ByteWrite from "../assets/ByteWrite.jpg";
import qubitconnect from "../assets/qubitconnect.jpeg"
import { motion } from "motion/react";

const Projects = () => {
  const projects = [
    {
      title: "Quantum Internet Simulator (QubitConnect)",
      image: qubitconnect,
      description:
        "Simulated a quantum internet with four interconnected nodes using BB84 protocol for quantum key distribution. Visualized entanglement and secure communication through an interactive React frontend, with backend logic powered by Node.js and Qiskit in Python.",
      tools: ["React", "Node.js", "Qiskit", "Python"],
    },
    {
      title: "ByteWrite",
      image: ByteWrite,
      description:
        "Developed a full-stack blogging application with secure user authentication using JWT. Users can sign up, sign in, create, and view blogs. ",
      tools: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "REST API",
        "Postman",
        "React",
        "TailwindCSS",
      ],
    },
    {
      title: "File Shredder Using Shamir’s Secret Sharing",
      image: shamir,
      description:
        "Developed a web application for secure file encryption and shredding using Shamir’s Secret Sharing (SSS) for data protection with a user-friendly interface with React and Flask for file upload, encryption, and key management.",
      tools: ["React", "Flask", "Shamir's Secret Sharing", "CSS"],
    },
    {
      title: "World Energy Consumption",
      image: worldenergy,
      description:
        "Developed a full-stack application to predict global energy consumption based on historical data and trends. The system involved both frontend and backend components to allow users to interact with the predictive model and view results through a user-friendly interface.",
      tools: ["React", "Python", "Pandas", "Matplotlib", "Machine Learning"],
    },
    {
      title: "Portfolio Website",
      image: portfolio,
      description:
        "A portfolio website displaying skills , projects and contact information.",
      tools: ["React", "HTML", "TailwindCSS", "Bootstrap"],
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-neutral-200"
      >
        Projects
      </motion.h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className="mb-8 flex flex-col md:flex-row md:items-center md:justify-center"
        >
          {/* Project Image */}
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            src={project.image}
            alt={`Project ${index + 1}`}
            className="mb-4 w-full max-w-sm md:mb-0 md:mr-8"
          />

          {/* Project Details */}
          <div className="w-full max-w-xl lg:w-3/4">
            <motion.h6
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="text-2xl mb-5 text-neutral-200"
            >
              {project.title}
            </motion.h6>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="text-sm text-neutral-500"
            >
              {project.description}
            </motion.p>

            {/* Tech Stack */}
            <div className="flex flex-wrap mt-4">
              {project.tools.map((tool, toolIndex) => (
                <motion.span
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 2 }}
                  key={toolIndex}
                  className="mr-2 mb-2 rounded-full bg-neutral-900 px-4 py-2 text-sm text-neutral-400 "
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
