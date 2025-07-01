import React from "react";
import hobbies from "../data/hobbies";
import HobbyCard from "../components/HobbyCard";

const Hobbies = () => {
  return (
    <section id="hobbies" className="pt-16 pb-16 px-6 text-white bg-grid">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Hobbies <span className="text-green-400 drop-shadow-glow">& Passions</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {hobbies.map((hobby, idx) => (
          <HobbyCard
            key={idx}
            emoji={hobby.emoji}
            title={hobby.title}
            description={hobby.description}
          />
        ))}
      </div>

      <div className="mt-16 text-center italic text-green-400 text-xl font-medium">
        "Creativity is intelligence having fun"
        <div className="text-sm text-gray-400 mt-1">— Einstein</div>
      </div>

      <div className="mt-10 max-w-4xl mx-auto text-center text-gray-300 text-lg leading-relaxed">
        These hobbies keep me balanced, motivated, and ready to tackle any
        challenge with enthusiasm and a fresh perspective. Whether I'm
        strategizing on the volleyball court, exploring new landscapes on a
        drive, or diving into a fascinating book, each activity fuels my
        creativity and problem-solving approach in engineering.
      </div>
    </section>
  );
};

export default Hobbies;
