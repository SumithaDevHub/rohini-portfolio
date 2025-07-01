import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from 'react-icons/fa';
import resume from '../assets/resume.pdf';

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 py-24 bg-[#0f1123] text-white relative"
    >
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
        Hi, I'm{' '}
        <span className="text-green-400 drop-shadow-glow">Rohini</span> 👋
      </h1>

      {/* Subheading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-400 font-semibold mb-6">
        A Curious ECE Engineer Crafting Smart Tech Solutions
      </h2>

      {/* Description */}
      <p className="text-base md:text-lg max-w-2xl text-gray-400 mb-10 leading-relaxed">
        Passionate about{' '}
        <span className="text-green-400 font-medium">AI</span>
        ,<span className="text-indigo-400 font-medium"> IoT</span>, and{' '}
        <span className="text-green-400 font-medium">Embedded Systems</span> — where curiosity meets innovation.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <a
          href="#projects"
          className="glow-pulse  px-6 py-2 rounded-md bg-blue-600 text-white font-semibold shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition transform duration-200"
        >
          View Projects
        </a>

        <a
          href={resume}
          download="Rohini_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-md bg-[#725f52] text-green-300 font-semibold border border-green-300 shadow-md hover:shadow-green-500/30 hover:scale-105 transition transform duration-200"
        >
          Download Resume
        </a>

        <a
          href="#contact"
          className="px-6 py-2 font-semibold text-white border-b-2 border-transparent hover:border-green-400 transition"
        >
          Get in Touch
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center items-center space-x-6 text-2xl text-gray-400">
        <a
          href="https://in.linkedin.com/in/rohini-r-b21983278"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/rohini-ravi2"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/rohini_ravi_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition"
          aria-label="LeetCode"
        >
          <FaCode />
        </a>
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=rohiniravi2028@gmail.com&su=Let's%20Connect&body=Hi%20Rohini%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-green-400 transition"
  aria-label="Email via Gmail"
>
  <FaEnvelope />
</a>

      </div>
    </section>
  );
};

export default Hero;
