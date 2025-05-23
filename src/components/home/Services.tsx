import React from 'react';
import { Home, Building, Hammer, PaintBucket, HardHat, Ruler } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import ServiceCard from '../shared/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: <Home size={24} />,
      title: 'Residential Construction',
      description: 'Custom home building with premium materials and superior craftsmanship for your dream residence.',
    },
    {
      icon: <Building size={24} />,
      title: 'Commercial Buildings',
      description: 'Office buildings, retail spaces, and industrial facilities built to precise specifications.',
    },
    {
      icon: <Hammer size={24} />,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with our expert renovation and remodeling services.',
    },
    {
      icon: <PaintBucket size={24} />,
      title: 'Interior Design',
      description: 'Professional interior design services to create beautiful and functional spaces.',
    },
    {
      icon: <HardHat size={24} />,
      title: 'Project Management',
      description: 'Complete project management from planning and design to construction and finishing.',
    },
    {
      icon: <Ruler size={24} />,
      title: 'Consulting Services',
      description: 'Expert construction consulting for architects, developers, and homeowners.',
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <SectionTitle 
          title="Our Services" 
          subtitle="Professional construction services tailored to your specific needs"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;