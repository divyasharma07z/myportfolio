import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaServer, FaDatabase, FaMobileAlt, FaGlobe } from 'react-icons/fa';

const services = [
  { 
    title: "Web Development", 
    desc: "Modern, responsive, and scalable websites.", 
    tools: "HTML, CSS, JavaScript", 
    icon: <FaGlobe />, 
    colors: "from-yellow-400 to-orange-500",
    image: "webdev.avif"  
  },
  { 
    title: "Frontend Development", 
    desc: "Pixel-perfect, smooth, and fast UI/UX.", 
    tools: "React, Tailwind, Bootstrap", 
    icon: <FaCode />, 
    colors: "from-purple-400 to-pink-500",
    image: "FE.jpg"
  },
  { 
    title: "Backend Development", 
    desc: "Secure, scalable, and efficient backend systems.", 
    tools: "Node.js, Express.js", 
    icon: <FaServer />, 
    colors: "from-green-400 to-teal-500",
    image: "be.png"
  },
 
 
  
];

const MyServices = () => {
  return (
    <div className="min-h-screen px-8 py-20 bg-black text-white flex flex-col items-center">
      <h1 className="text-center text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-8 leading-normal pt-3 pb-3">
      My Services
</h1>
<p className="text-center text-xl text-gray-300 italic mb-12">
  "Showcasing Creative and High-Impact Web Solutions"
</p>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="relative p-10 rounded-3xl border border-gray-800 shadow-lg backdrop-blur-xl bg-opacity-10 bg-white transition-transform transform"
          >
            {/* Service Image */}
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            {/* Floating Icon */}
            <div className="text-4xl mb-4 text-gray-300">{service.icon}</div>

            {/* Gradient Title */}
            <p className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${service.colors}`}>
              {service.title}
            </p>

            {/* Description */}
            <p className="text-gray-300 mt-3 text-lg">{service.desc}</p>
            <p className="text-gray-400 mt-2 text-sm">{service.tools}</p>

            {/* Soft Neon Border Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff7eb3]/20 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100 rounded-3xl"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
