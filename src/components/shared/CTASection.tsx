import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
}

const CTASection = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink,
  backgroundImage = 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
}: CTASectionProps) => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ctaRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
        }
      });

      tl.fromTo(
        ctaRef.current.querySelector('h2'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      )
      .fromTo(
        ctaRef.current.querySelector('p'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo(
        ctaRef.current.querySelector('.btn'),
        { opacity: 0, y: 20, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.5, 
          ease: 'back.out(1.7)' 
        },
        '-=0.3'
      );
    }
  }, []);

  return (
    <div 
      ref={ctaRef}
      className="relative py-20 md:py-24 bg-blue-900 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(23, 37, 84, 0.9), rgba(23, 37, 84, 0.9)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container-custom text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-8">{subtitle}</p>
        <Link to={buttonLink} className="btn btn-secondary inline-block">
          {buttonText}
        </Link>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 bg-blue-500 rounded-full w-64 h-64"></div>
        <div className="absolute top-full right-0 bg-orange-500 rounded-full w-96 h-96 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default CTASection;