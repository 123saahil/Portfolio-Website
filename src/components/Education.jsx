import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const educationList = [
    {
      institution: "Johnson Grammar School CBSE",
      degree: "Secondary Education",
      year: "2020",
    },
    {
      institution: "St. Patrick’s Junior College",
      degree: "Intermediate Education",
      year: "2022",
    },
    {
      institution: "Indian Institute of Information Technology, Dharwad",
      degree: "B.Tech. in Computer Science and Engineering",
      year: "2026",
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
        Education
      </motion.h2>
      {educationList.map((item, index) => (
        <div
          key={index}
          className="mb-8 flex flex-col items-start justify-start border-b border-neutral-800 pb-4"
        >
          {/* Institution Name */}
          <motion.h3
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-bold text-neutral-200 mb-2"
          >
            {item.institution}
          </motion.h3>

          {/* Degree */}
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="text-lg text-neutral-400"
          >
            {item.degree}
          </motion.p>

          {/* Year */}
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.2 }}
            className="text-sm text-neutral-500 mt-1"
          >
            {item.year}
          </motion.p>
        </div>
      ))}
    </div>
  );
};

export default Education;
