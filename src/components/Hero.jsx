import React from "react";
import profilePic from "../assets/saahilmishra.jpg";
import { motion } from "motion/react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap items-center">
        <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-6xl font-thin tracking-tight lg:text-8xl py-10"
          >
            Saahil Mishra
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
          >
            Full Stack Developer
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-2 font-light tracking-tighter text-lg text-center lg:text-left"
          >
            Passionate about building scalable and efficient web applications with
            expertise in modern frontend frameworks like React.js and backend
            technologies such as Node.js and Express.js. Proficient in
            integrating databases, and managing deployments using platforms like
            Docker, AWS, and Vercel. Focused on delivering secure, reliable, and
            optimized solutions while staying updated with emerging trends in
            web development and cloud technologies.
          </motion.p>
        </div>

        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end lg:ml-4 px-10">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="Saahil Mishra"
            className="rounded-sm w-72 h-75 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
