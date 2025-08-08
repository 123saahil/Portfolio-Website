import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { BiLogoDocker } from "react-icons/bi";
import { IoLogoNodejs } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { motion } from "framer-motion";
import { SiPrisma } from "react-icons/si";
import { SiTurborepo } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [-10, 10], // Correct keyframes for up and down movement
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity, // Correct spelling and usage
      repeatType: "reverse", // Ensures smooth reverse animation
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -10 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400 "></RiReactjsLine>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl text-green-500 "></TbBrandNextjs>
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-sky-700 "></SiMongodb>
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoDocker className="text-7xl text-red-400 "></BiLogoDocker>
        </motion.div>
        <motion.div
          variants={iconVariants(2.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoNodejs className="text-7xl text-green-500 "></IoLogoNodejs>
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPostman className="text-7xl text-orange-500 "></SiPostman>
        </motion.div>
        <motion.div
          variants={iconVariants(4.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPrisma className="text-7xl text-white-900 "></SiPrisma>
        </motion.div>
        <motion.div
          variants={iconVariants(4.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTurborepo className="text-7xl text-white-900 "></SiTurborepo>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
