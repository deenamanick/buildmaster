import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '../shared/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const FeaturedProjects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Skyline Tower',
      category: 'Commercial Building',
      image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: 'Oakridge Residences',
      category: 'Residential Complex',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: 'Metro Plaza Renovation',
      category: 'Renovation',
      image: 'https://images.pexels.com/photos/2610756/pexels-photo-2610756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      title: 'Riverfront Office Complex',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  useEffect(() => {
    if (projectsRef.current) {
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.15, 
          duration: 0.8, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 70%',
          }
        }
      );
    }
  }, []);

  return (
    <section className="section bg-blue-900 py-20">
      <div ref={projectsRef} className="container-custom">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Explore some of our recent construction and renovation projects"
          centered
          light
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card relative group overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent opacity-80"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-orange-400 text-sm mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                <Link 
                  to={`/portfolio/${project.id}`} 
                  className="inline-flex items-center text-white hover:text-orange-400 transition-colors"
                >
                  <span className="mr-2">View Project</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/portfolio" className="btn btn-outline text-white border-white hover:bg-white hover:text-blue-900">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;