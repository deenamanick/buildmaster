import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon, title, description, delay = 0 }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { 
          y: 50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1,
          duration: 0.6,
          delay: delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 90%',
          }
        }
      );
    }
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="card p-6 hover:shadow-xl transition-all duration-300 group"
    >
      <div className="bg-blue-100 text-blue-800 p-3 inline-block rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-blue-600 font-medium group-hover:text-orange-500 transition-colors">
        <span className="mr-2">Learn More</span>
        <ArrowRight className="transform group-hover:translate-x-2 transition-transform" size={16} />
      </div>
    </div>
  );
};

export default ServiceCard;