import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen bg-black flex flex-col justify-center items-center px-6 py-10 text-white overflow-hidden font-[Poppins]"
    >
      {/* Header Section */}
      <header className="w-full max-w-4xl text-center mt-10 md:mt-20 space-y-4 md:space-y-6">
        <motion.img
          src="dp.webp" // Ensure the image is placed in the public/ folder
          alt="Profile Picture of Divya Sharma"
          className="w-28 h-28 md:w-40 md:h-40 rounded-full mx-auto shadow-lg border-4 border-[#ff7eb3] hover:scale-110 transition-transform duration-300"
          loading="lazy"
          whileHover={{ scale: 1.1 }}
        />
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#ff7eb3] to-[#85e7ff] text-transparent bg-clip-text drop-shadow-lg overflow-visible pt-2 pb-2"

        >
          Hello, I'm Divya Sharma
        </motion.h1>
        <p className="text-pretty md:text-lg font-light text-gray-300 leading-7 md:leading-8 max-w-xl mx-auto">
        Aspiring Web Designer
I am a passionate and creative fresher aiming to build my career as a Web Designer. I have strong knowledge of frontend development with skills in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React, along with a keen interest in UI/UX design. I enjoy creating clean, responsive, and visually engaging websites, and I’m proficient in Photoshop and Figma for designing user-friendly interfaces. I’m eager to grow, learn, and contribute my creativity and technical skills to innovative web design projects.


        </p>
      </header>

      {/* Action Links */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 flex-wrap justify-center max-w-full"
      >
       <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#contact"
          className="px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg shadow-lg bg-gradient-to-r from-[#ff7eb3] to-[#85e7ff] text-black hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Contact Me
        </a>
        <a
          href="cv.pdf"
          className="px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg shadow-lg bg-gradient-to-r from-[#ff7eb3] to-[#85e7ff] text-black hover:shadow-2xl hover:scale-105 transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
