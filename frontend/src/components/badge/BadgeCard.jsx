import React from "react";
import { Lock } from "lucide-react";
const BadgeCard = ({ badge }) => {
  // Jika badge belum diraih, kuncikan badge card
  if (badge.awarded === false)
    return (
      <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl">
        <div
          className={`relative opacity-20 w-20 h-20 rounded-full flex items-center justify-center mb-3 text-gray-500`}
        >
          <img
            src={`/Badge/${badge.image_name}`}
            alt={badge.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Lock className="w-6 h-6 text-gray-900" />
          </div>
        </div>
        <h3 className="font-semibold">{badge.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{badge.criteria}</p>
      </div>
    );
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl">
      <div
        className={`w-20 h-20 rounded-full flex items-center justify-center mb-3 text-gray-500`}
      >
        <img
          src={`/Badge/${badge.image_name}`}
          alt={badge.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="font-semibold">{badge.name}</h3>
      <p className="text-sm text-gray-600 mt-1">{badge.criteria}</p>
    </div>
  );
};

export default BadgeCard;
