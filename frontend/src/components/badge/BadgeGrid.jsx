import React from "react";
import BadgeCard from "./BadgeCard";

const BadgeGrid = ({ badges }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-x-16">
      {badges.map((badge) => (
        <BadgeCard key={badge.id} badge={badge} />
      ))}
    </div>
  );
};

export default BadgeGrid;
