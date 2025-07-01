import React from "react";

const TechCard = ({ title, skills }) => {
  return (
    <div className="bg-[#121633]/90 border border-gray-600 rounded-xl p-6 w-full shadow-md backdrop-blur-md transition duration-300 hover:shadow-green-glow hover:-translate-y-2">
      <h3 className="text-lg font-semibold text-blue-400 mb-4 text-center">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm text-white mb-1">
              <span>{skill.name}</span>
              <span className="text-green-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 h-2 rounded">
              <div
                className="h-2 rounded bg-pink-400"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
