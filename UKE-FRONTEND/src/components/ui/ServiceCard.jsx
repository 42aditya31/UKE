import React from "react";

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <div className="border  shadow-sm text-center p-6 h-[300px] w-[220px] max-w-xs bg-white mx-auto">
      {/* Icon Circle */}
      <div className="w-16 h-16 rounded-full text-black text-3xl bg-gray-100 mx-auto flex items-center justify-center mb-4">
      
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-black">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-2">
        {description}
      </p>

      {/* Button */}
      <a
        href={link || "#"}
        className="inline-block mt-4 px-5 py-2 text-sm text-white bg-green-600 rounded-full hover:bg-green-700 transition"
      >
        Read more
      </a>
    </div>
  );
};

export default ServiceCard;
