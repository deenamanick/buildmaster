import React, { useRef } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';

interface TestimonialCardProps {
  name: string;
  role?: string;
  content: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({ 
  name, 
  role, 
  content, 
  rating, 
  image = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
}: TestimonialCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, { 
        y: -10, 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, { 
        y: 0, 
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-lg shadow-md p-6 md:p-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center mb-5">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={`${i < rating ? 'text-orange-500 fill-orange-500' : 'text-gray-300'} mr-1`} 
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">{content}</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-bold text-blue-900">{name}</h4>
          {role && <p className="text-gray-600 text-sm">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;