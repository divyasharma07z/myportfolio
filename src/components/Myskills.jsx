import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiFigma } from "react-icons/si";

const skills = [
  { name: "HTML", level: "95%", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", level: "90%", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", level: "85%", icon: <FaJs className="text-yellow-400" /> },
  { name: "Bootstrap", level: "80%", icon: <FaBootstrap className="text-purple-500" /> },
  { name: "React", level: "75%", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", level: "80%", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "UI/UX", level: "60%", icon: <SiFigma className="text-pink-500" /> },
];

const Myskills = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-10">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold tracking-wide leading-tight bg-gradient-to-r from-pink-500 to-blue-400 text-transparent bg-clip-text text-center pt-4 pb-4"
      >
        My Skills 💻
      </motion.h1>

      <p className="mt-4 text-lg text-gray-400 text-center italic">
        Mastering the latest web technologies.
      </p>

      {/* Skill Cards Grid */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="group relative w-full max-w-[180px] sm:max-w-[200px] flex flex-col items-center justify-center bg-gray-900 rounded-xl shadow-lg border border-gray-700 hover:border-pink-500 transition-all duration-300 p-6 pb-8"
          >
            {/* Icon */}
            <div className="text-5xl sm:text-6xl">{skill.icon}</div>

            {/* Name */}
            <h3 className="mt-3 text-lg sm:text-xl font-semibold text-gray-200">{skill.name}</h3>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden mt-3">
              <motion.div
                className="h-2 bg-gradient-to-r from-pink-500 to-blue-400"
                style={{ width: skill.level }}
                initial={{ width: "0%" }}
                animate={{ width: skill.level }}
                transition={{ duration: 1.5 }}
              ></motion.div>
            </div>

            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 group-hover:opacity-40 transition-all duration-300 rounded-xl"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Myskills;
