import React from "react";

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-6">
      <h1 className="text-lg lg:text-3xl md:text-2xl font-bold border-b-2 border-black pb-2">{title}</h1>
      {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
    </div>
  );
};

export default PageHeader;
