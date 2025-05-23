import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader = ({ 
  title, 
  subtitle,
  backgroundImage = 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
}: PageHeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      // Animate the header content
      gsap.fromTo(
        headerRef.current.querySelector('.header-content'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <div 
      ref={headerRef}
      className="relative flex items-center justify-center py-24 md:py-32 mb-12"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="header-content text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-white text-xl md:text-2xl max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;