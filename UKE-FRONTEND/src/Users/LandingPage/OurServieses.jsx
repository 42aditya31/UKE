import React from "react";
import ServiceCard from "../../components/ui/ServiceCard";
import { Services } from "../../data/data";

const OurServices = () => {
  return (
    <section className="sm:px-10 py-16 text-white text-center">
      {/* Section Title */}
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
          Our Services
        </h1>
        <div className="w-20 h-1 bg-green-600 mx-auto rounded"></div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 max-w-7xl mx-2 ">
        {Services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            link={service.link}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
