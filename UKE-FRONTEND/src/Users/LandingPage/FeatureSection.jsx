import React from 'react';
import FeatureCard from '../../components/ui/FeatureCard';
import { features } from '../../data/data'; // ✅ Properly import the array

const FeatureSection = () => {
  return (
    <section className="px-4 sm:ml-20 ml-6 py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            number={feature.number}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
