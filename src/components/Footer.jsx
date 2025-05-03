import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Gradient Text */}
        <p className="text-sm text-gray-400">
          © 2025{' '}
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold">
            Divya Sharma
          </span>
          . All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/divyasharma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/divya-sharma-106143260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
