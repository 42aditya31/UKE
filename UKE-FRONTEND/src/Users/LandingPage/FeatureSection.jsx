import React from 'react'
import FeatureCard from '../../components/ui/FeatureCard'

const features = [
  {
    id: "feature_01",
    icon: "🏠",
    number: "01",
    title: "Home Security",
    description: "Protect what matters most with smart home surveillance. Our advanced cameras work 24/7 to keep your family and property secure—day or night, indoors or out."
  },
  {
    id: "feature_02",
    icon: "🔐",
    number: "02",
    title: "Access Control",
    description: "Manage who enters your space with intelligent access. Authorize, monitor, and log entry in real time—only trusted individuals get in."
  },
  {
    id: "feature_03",
    icon: "🎧",
    number: "03",
    title: "24/7 Monitoring",
    description: "Get round-the-clock peace of mind. Our system offers live alerts, remote access, and non-stop monitoring wherever you are."
  }
]

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
  )
}

export default FeatureSection
