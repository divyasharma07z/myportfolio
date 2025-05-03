import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLock,
  FaMoneyBillWave,
  FaEdit,
  FaPaintBrush,
  FaShoppingCart,
  FaClipboardList,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Password Generator",
    description: "Generate strong and secure passwords effortlessly.",
    fullDescription: "A customizable password generator that helps create random, strong passwords to ensure the security of user accounts.",
    image: "passwordgenerator.png",
    icon: <FaLock />,
    colors: "from-yellow-400 to-orange-500",
    link: "https://github.com/divyasharma07z/passwordgenerator.git",
  },
  {
    id: 2,
    title: "Currency Converter",
    description: "Convert currencies instantly with real-time rates.",
    fullDescription: "A real-time currency converter that helps users easily manage international transactions using up-to-date exchange rates.",
    image: "currencyconvertor.png",
    icon: <FaMoneyBillWave />,
    colors: "from-purple-400 to-pink-500",
    link: "https://github.com/divyasharma07z/Currencyconvertor.git",
  },
  {
    id: 3,
    title: "Text Editor",
    description: "Lightweight editor for simple text editing tasks.",
    fullDescription: "A basic yet powerful text editor offering features like text formatting, saving, and opening files, with a user-friendly interface.",
    image: "texteditor.png",
    icon: <FaEdit />,
    colors: "from-green-400 to-teal-500",
    link: "https://github.com/divyasharma07z/TextEditor",
  },
  {
    id: 4,
    title: "Background Changer",
    description: "Customize your app's look with one click.",
    fullDescription: "This app allows users to personalize backgrounds with different images and visual effects at the click of a button.",
    image: "bgchanger.png",
    icon: <FaPaintBrush />,
    colors: "from-blue-400 to-cyan-500",
    link: "https://github.com/divyasharma07z/bgchanger.git",
  },
  {
    id: 5,
    title: "Shopique E-Commerce Website",
    description: "Modern e-commerce site with Shopique Points system.",
    fullDescription: "Shopique is a complete e-commerce platform offering product browsing, purchasing, user authentication, and a loyalty points rewards system.",
    image: "shopique.png",
    icon: <FaShoppingCart />,
    colors: "from-red-400 to-rose-500",
    link: "https://github.com/divyasharma07z/ecommerce.git",
  },
  {
    id: 6,
    title: "To-Do List App",
    description: "Organize your tasks with ease and simplicity.",
    fullDescription: "A clean and responsive To-Do List app built with React, Vite, and Tailwind CSS. Users can add, view, delete, and clear tasks, with persistent localStorage support and smooth UI animations.",
    image: "todo.png",
    icon: <FaClipboardList />,
    colors: "from-orange-400 to-pink-500",
    link: "https://github.com/divyasharma07z/todo-list.git",
  },
];

const Projects = () => {
  const [activeProjectId, setActiveProjectId] = useState(null);

  const toggleDescription = (id) => {
    setActiveProjectId(activeProjectId === id ? null : id);
  };

  return (
    <div className="min-h-screen px-6 py-20 md:py-24 bg-black text-white flex flex-col items-center overflow-visible">
      {/* Heading */}
      <h1 className="text-center text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-8 leading-normal pt-4 pb-4">

        My Projects 🚀
      </h1>
      
  
  {/* Tagline */}
  <p className="text-center text-xl text-gray-300 italic mb-12">
    "Innovative and Creative Solutions to Enhance Your Digital Experience"
  </p>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.4 }}
            className="group relative p-6 rounded-3xl border border-gray-800 shadow-lg backdrop-blur-lg bg-opacity-10 bg-white hover:shadow-pink-500/20 transition-transform"
          >
            {/* Project Icon */}
            <div className="text-5xl mb-4 text-pink-400">{project.icon}</div>

            {/* Project Image */}
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Title */}
            <h2 className={`text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${project.colors}`}>
              {project.title}
            </h2>

            {/* Short Description */}
            <p className="text-gray-300 mb-6 text-base">{project.description}</p>

            {/* Visit Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-blue-400 text-white font-semibold hover:opacity-90 transition"
            >
              Visit Project →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
