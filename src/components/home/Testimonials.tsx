import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '../shared/SectionTitle';
import TestimonialCard from '../shared/TestimonialCard';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Michael Roberts',
    role: 'Homeowner',
    content: 'BuildMaster transformed our outdated home into a modern masterpiece. Their attention to detail and quality craftsmanship exceeded our expectations.',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Sarah Johnson',
    role: 'Property Developer',
    content: 'Working with BuildMaster on our commercial project was a seamless experience. They delivered on schedule and within budget, with exceptional quality.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'David Chen',
    role: 'Architect',
    content: 'As an architect, I appreciate contractors who understand design intent. BuildMaster not only understood our vision but enhanced it with their expertise.',
    rating: 5,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (testimonialsRef.current) {
      gsap.fromTo(
        testimonialsRef.current.querySelectorAll('.testimonial-item'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: 'top 70%',
          },
        }
      );
    }
  }, []);

  return (
    <section className="section py-20 bg-gray-50">
      <div ref={testimonialsRef} className="container-custom">
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Hear from our satisfied clients about their experience working with BuildMaster"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
                image={testimonial.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;