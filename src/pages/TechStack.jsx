import React from "react";
import techStack from "../data/techstack";
import TechCard from "../components/TechCard";

const TechStack = () => {
  return (
    <section id="techstack" className="min-h-screen bg-[#0f1123] text-white px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Tech <span className="text-green-400 drop-shadow-glow">Stack</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {techStack.map((group, idx) => (
          <TechCard key={idx} {...group} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
