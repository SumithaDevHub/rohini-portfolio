import React from 'react';
import { FaGraduationCap, FaBolt, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-[#0f1123] text-white px-6 py-16 flex flex-col items-center">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        About <span className="text-green-400 drop-shadow-glow">Me</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Card 1 */}
        <div className="bg-[#121633] border border-gray-700 rounded-xl p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-green-glow">

          <div className="flex justify-center mb-4">
            <div className="bg-[#1c1f3a] p-4 rounded-full glow-green">
              <FaGraduationCap className="text-3xl text-blue-400" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-blue-400 mb-2">Who I Am</h3>
          <p className="text-gray-300">
            A final-year ECE student driven by curiosity and passion for solving real-world problems through innovative technology.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#121633] border border-gray-700 rounded-xl p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-green-glow">

          <div className="flex justify-center mb-4">
            <div className="bg-[#1c1f3a] p-4 rounded-full glow-green">
              <FaBolt className="text-3xl text-green-400" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-green-400 mb-2">What I Do</h3>
          <p className="text-gray-300">
            Circuit design, coding, AI development – blending electronics and programming to create smart, efficient solutions.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#121633] border border-gray-700 rounded-xl p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-green-glow">

          <div className="flex justify-center mb-4">
            <div className="bg-[#1c1f3a] p-4 rounded-full glow-green">
              <FaRocket className="text-3xl text-pink-400" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-blue-400 mb-2">What Drives Me</h3>
          <p className="text-gray-300">
            Challenges that push creative and analytical thinking – always aiming to learn faster and build better.
          </p>
        </div>
      </div>

      {/* Paragraph */}
      <div className="mt-12 max-w-4xl text-center text-gray-300 text-lg leading-relaxed">
        <p>
          I'm fascinated by how electronics and programming come together to create smart, efficient solutions that make an impact. 
          My approach blends technical precision with a problem-solving mindset, whether it's designing circuits, writing code, or debugging complex systems.
        </p>
        <br />
        <p>
          Outside of engineering, I'm a committed volleyball player, where I've honed <span className="text-green-400 font-semibold">teamwork</span>, 
          <span className="text-blue-400 font-semibold"> resilience</span>, and 
          <span className="text-green-400 font-semibold"> focus</span> – qualities that shape how I tackle every project.
        </p>
      </div>
    </section>
  );
};

export default About;
