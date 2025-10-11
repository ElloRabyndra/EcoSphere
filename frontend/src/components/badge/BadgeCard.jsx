import React from "react";

const BadgeCard = ({ title, description, isComplete }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl">
      <div
        className={`w-20 h-20 rounded-full flex items-center justify-center mb-3 
        ${isComplete ? "bg-primary text-white" : "bg-gray-300 text-gray-500"}`}
      >
        {/* Placeholder badge icon */}
        <span className="font-bold text-xl">🏅</span>
      </div>

      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
};

export default BadgeCard;
