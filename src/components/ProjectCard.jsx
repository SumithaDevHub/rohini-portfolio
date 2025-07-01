import React from "react";

const ProjectCard = ({ title, category, problem, solution, techStack }) => {
  return (
    <div className="bg-[#121633]/80 border border-gray-600 rounded-xl p-6 max-w-4xl mx-auto mb-10 shadow-md backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-green-glow">

      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl md:text-2xl font-semibold text-blue-400">
          {title}
        </h3>
        <span className="text-sm bg-transparent border border-green-400 px-3 py-1 text-green-300 rounded-full">
          {category}
        </span>
      </div>

      <div className="mb-3">
        <p className="text-red-400 font-semibold">Problem Statement:</p>
        <p className="text-gray-300">{problem}</p>
      </div>

      <div className="mb-3">
        <p className="text-green-400 font-semibold">Solution:</p>
        <p className="text-gray-300">{solution}</p>
      </div>

      <div>
        <p className="text-blue-400 font-semibold mb-1">Technologies Used:</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-sm bg-[#0e1a35] text-blue-300 px-3 py-1 rounded-full border border-blue-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
