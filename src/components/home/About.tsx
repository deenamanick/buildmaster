import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutRef.current && imageRef.current) {
      // Animate the content
      gsap.fromTo(
        aboutRef.current.querySelectorAll('.content-animate'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 70%',
          },
        }
      );
      
      // Animate the image
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 70%',
          },
        }
      );
    }
  }, []);

  return (
    <section className="section py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={aboutRef} className="order-2 lg:order-1">
            <div className="content-animate">
              <div className="h-1 w-16 bg-orange-500 mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Building Excellence Since 2000
              </h2>
            </div>
            
            <p className="content-animate text-gray-600 mb-6">
              BuildMaster Construction has been delivering exceptional construction services for over 25 years. 
              Our commitment to quality craftsmanship, innovative design, and customer satisfaction has made us 
              a trusted name in the construction industry.
            </p>
            
            <div className="content-animate mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Why Choose Us</h3>
              <ul className="space-y-3">
                {[
                  'Experienced team of construction professionals',
                  'Quality materials and superior craftsmanship',
                  'On-time project completion and transparent pricing',
                  'Comprehensive construction solutions',
                  'Exceptional customer service and communication'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-orange-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="content-animate">
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
          
          <div ref={imageRef} className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Construction professionals" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-100 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;