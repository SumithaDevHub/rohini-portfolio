import React from 'react';
import resume from '../assets/resume.pdf';

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0f1123] px-6 md:px-12 py-4 flex justify-between items-center shadow-md">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-green-300 drop-shadow-glow">
        Rohini.dev
      </div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-8 text-white font-medium">
        <li>
          <a href="#home" className="hover:text-green-300 transition duration-200">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-green-300 transition duration-200">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-green-300 transition duration-200">Projects</a>
        </li>
        <li>
          <a href="#techstack" className="hover:text-green-300 transition duration-200">Tech Stack</a>
        </li>
        <li>
          <a href="#hobbies" className="hover:text-green-300 transition duration-200">Hobbies</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-green-300 transition duration-200">Contact</a>
        </li>
      </ul>

      {/* Resume Button */}
      <div>
        <a 
          href={resume}
          download="Rohini_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-4 py-2 bg-[#725f52] text-green-300 rounded-md border border-green-300 hover:scale-105 transition duration-200"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
