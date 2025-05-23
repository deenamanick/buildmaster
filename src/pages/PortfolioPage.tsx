import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import PageHeader from '../components/shared/PageHeader';
import SectionTitle from '../components/shared/SectionTitle';
import CTASection from '../components/shared/CTASection';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  location: string;
  year: string;
  image: string;
  images: string[];
}

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Skyline Tower',
      category: 'Commercial',
      description: 'A 20-story office tower featuring a sleek glass facade, energy-efficient systems, and state-of-the-art facilities for multiple corporate tenants.',
      location: 'Downtown Metropolis',
      year: '2023',
      image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      images: [
        'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/358639/pexels-photo-358639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 2,
      title: 'Oakridge Residences',
      category: 'Residential',
      description: 'A luxury condominium complex with 50 units, featuring modern amenities including a pool, fitness center, and rooftop garden.',
      location: 'Oakridge Hills',
      year: '2024',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      images: [
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 3,
      title: 'Metro Plaza Renovation',
      category: 'Renovation',
      description: 'A complete renovation of a historic shopping plaza, preserving its architectural character while updating all systems and interiors.',
      location: 'Historic District',
      year: '2022',
      image: 'https://images.pexels.com/photos/2610756/pexels-photo-2610756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      images: [
        'https://images.pexels.com/photos/2610756/pexels-photo-2610756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/3097464/pexels-photo-3097464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/3097112/pexels-photo-3097112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 4,
      title: 'Riverfront Office Complex',
      category: 'Commercial',
      description: 'A riverside office complex with three buildings connected by landscaped courtyards, featuring sustainable design elements.',
      location: 'Riverside District',
      year: '2023',
      image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      images: [
        'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/561201/pexels-photo-561201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 5,
      title: 'Lakeside Villa',
      category: 'Residential',
      description: 'A 6,000 sq ft custom lakefront home featuring floor-to-ceiling windows, gourmet kitchen, and outdoor living spaces.',
      location: 'Lake Vista',
      year: '2022',
      image: 'https://images.pexels.com/photos/2119706/pexels-photo-2119706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      images: [
        'https://images.pexels.com/photos/2119706/pexels-photo-2119706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 6,
      title: 'Heritage Hotel Restoration',
      category: 'Renovation',
      description: 'A meticulous restoration of a 100-year-old hotel, preserving historical elements while adding modern amenities and safety features.',
      location: 'Old Town',
      year: '2021',
      image: 'https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      images: [
        'https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/271614/pexels-photo-271614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 7,
      title: 'Green Valley Community Center',
      category: 'Institutional',
      description: 'A LEED-certified community center with multipurpose spaces, recreational facilities, and sustainable design features.',
      location: 'Green Valley',
      year: '2024',
      image: 'https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      images: [
        'https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1747193/pexels-photo-1747193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 8,
      title: 'The Heights Apartments',
      category: 'Residential',
      description: 'A modern apartment complex with 120 units, including studios, one and two-bedroom layouts, with shared amenities and underground parking.',
      location: 'Upper Eastside',
      year: '2023',
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      images: [
        'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1550596/pexels-photo-1550596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 9,
      title: 'Downtown Medical Center',
      category: 'Institutional',
      description: 'A state-of-the-art medical facility with specialized treatment areas, diagnostic imaging center, and patient-centered design.',
      location: 'Downtown District',
      year: '2022',
      image: 'https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      images: [
        'https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    }
  ];

  const categories = ['All', 'Commercial', 'Residential', 'Renovation', 'Institutional'];

  useEffect(() => {
    // Update page title
    document.title = 'Portfolio | BuildMaster Construction';

    // Animate projects
    if (projectsRef.current) {
      animateProjects();
    }
  }, [selectedCategory]);

  const animateProjects = () => {
    if (!projectsRef.current) return;

    gsap.fromTo(
      projectsRef.current.querySelectorAll('.project-card'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
      }
    );
  };

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <PageHeader 
        title="Our Portfolio" 
        subtitle="Explore our completed construction and renovation projects"
        backgroundImage="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="section py-16">
        <div className="container-custom">
          <SectionTitle 
            title="Our Projects" 
            subtitle="Browse our portfolio of residential, commercial, and institutional construction projects"
            centered
          />

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 m-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div 
            ref={projectsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="project-card bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-white text-sm mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-blue-100">{project.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="text-sm text-gray-500">
                    Completed In {project.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Construction Project?"
        subtitle="Contact us today to discuss your vision and how we can bring it to life."
        buttonText="Request a Quote"
        buttonLink="/quote"
      />
    </>
  );
};

export default PortfolioPage;