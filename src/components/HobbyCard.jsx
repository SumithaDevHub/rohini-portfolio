import React from "react";

const HobbyCard = ({ emoji, title, description }) => {
  return (
    <div className="bg-[#121633]/80 border border-gray-600 rounded-xl text-center p-6 transition hover:shadow-green-glow hover:-translate-y-2 backdrop-blur">
      <div className="text-5xl mb-4">{emoji}</div>
      <h3 className="text-lg font-semibold text-blue-400 mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default HobbyCard;
