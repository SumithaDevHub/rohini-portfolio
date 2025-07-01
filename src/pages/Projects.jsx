import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";


const Projects = () => {
  return (
    <section id="projects" className="min-h-screen text-white px-6 py-16 bg-grid">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 flex justify-center items-center gap-3">
        🚀 <span className="text-white">Projects</span>
      </h2>

      <div className="grid gap-12">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
