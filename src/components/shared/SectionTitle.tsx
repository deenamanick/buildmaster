import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = false,
  light = false
}: SectionTitleProps) => {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current.querySelector('.title-line'),
        { width: 0 },
        { 
          width: '100%', 
          duration: 1, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo(
        titleRef.current.querySelector('h2'),
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.7, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          }
        }
      );

      if (subtitle) {
        gsap.fromTo(
          titleRef.current.querySelector('p'),
          { y: 20, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.7, 
            delay: 0.2, 
            ease: 'power2.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%',
            }
          }
        );
      }
    }
  }, [subtitle]);

  return (
    <div
      ref={titleRef}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <div 
        className={`title-line h-1 w-0 mb-4 ${centered ? 'mx-auto' : ''} 
          ${light ? 'bg-orange-400' : 'bg-orange-500'}`}
        style={{ maxWidth: '80px' }}
      ></div>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-blue-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} 
          ${light ? 'text-blue-100' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;