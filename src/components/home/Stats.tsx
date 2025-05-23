import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StatType {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const Stats = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [counted, setCounted] = useState(false);
  
  const stats: StatType[] = [
    { value: 25, label: 'Years of Experience', suffix: '+', duration: 2 },
    { value: 500, label: 'Projects Completed', suffix: '+', duration: 2.5 },
    { value: 150, label: 'Professional Team', suffix: '+', duration: 2.3 },
    { value: 98, label: 'Client Satisfaction', suffix: '%', duration: 2.7 }
  ];
  
  useEffect(() => {
    if (statsRef.current && !counted) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          onEnter: () => setCounted(true)
        }
      });
      
      // Animate the container
      tl.fromTo(
        statsRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: 'power2.out' }
      );
      
      // Animate each stat counter
      stats.forEach((stat, index) => {
        const selector = `.stat-value-${index}`;
        const element = statsRef.current?.querySelector(selector);
        if (element) {
          gsap.fromTo(
            element,
            { textContent: '0' },
            {
              textContent: stat.value,
              duration: stat.duration || 2,
              ease: 'power2.out',
              snap: { textContent: 1 },
              stagger: 0.25,
              scrollTrigger: {
                trigger: statsRef.current,
                start: 'top 80%'
              },
              onUpdate: function() {
                element.textContent = Math.round(Number(element.textContent)) + (stat.suffix || '');
              }
            }
          );
        }
      });
    }
  }, [stats, counted]);

  return (
    <section 
      ref={statsRef}
      className="py-16 bg-blue-600 text-white"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl md:text-5xl font-bold mb-2 stat-value-${index}`}>
                0{stat.suffix}
              </div>
              <p className="text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;