import React from "react";
import { Link } from "react-router-dom";

const BannerCard = ({
  image,
  title,
  description,
  stats,
  buttonText,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center bg-white text-black rounded-lg shadow-md overflow-hidden`}
    >
      {/* Image Section */}
      <div className="w-full my-10 lg:w-1/2 max-h-80 pb-10">
        <img
          src={image}
          alt={title}
          className="object-fit w-full h-full"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full lg:w-1/2 p-6 lg:p-10 space-y-4">
        <h2 className="text-4xl font-extrabold">{title}</h2>
        <div className="w-16 h-1 bg-green-600 mb-2"></div>
        <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">{description}</p>

        {/* Stats */}
       {stats && <div className="flex flex-wrap gap-6 mt-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <span className="text-3xl">{stat.icon}</span>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-green-600 text-base font-semibold">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>}

        {/* Button */}
        {buttonText && (
          <Link to="/home">
            <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-lg rounded-full transition duration-300">
              {buttonText}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BannerCard;
