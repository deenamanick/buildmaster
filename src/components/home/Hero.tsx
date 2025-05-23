import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    if (heroRef.current) {
      tl.fromTo(
        '.hero-overlay',
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out' }
      )
      .fromTo(
        '.hero-title',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      )
      .fromTo(
        '.hero-buttons .btn',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      );
    }
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay absolute inset-0 bg-blue-900 bg-opacity-75"></div>
      
      <div className="container-custom relative z-10 text-center py-20">
        <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Building Excellence, <br className="hidden md:block" />
          <span className="text-orange-500">Constructing Dreams</span>
        </h1>
        
        <p className="hero-subtitle text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-8">
          Quality construction services for residential and commercial projects. 
          Expert craftsmanship and unmatched reliability.
        </p>
        
        <div className="hero-buttons flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/portfolio" className="btn btn-primary">
            View Our Projects
          </Link>
          <Link to="/quote" className="btn btn-outline text-white hover:text-white">
            Request a Quote
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center">
        <div className="w-8 h-12 border-2 border-white rounded-full mx-auto mb-2 relative">
          <div className="w-1.5 h-3 bg-white rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
        </div>
        <span className="text-sm uppercase tracking-widest">Scroll Down</span>
      </div>
    </div>
  );
};

export default Hero;