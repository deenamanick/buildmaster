import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '../components/shared/PageHeader';
import SectionTitle from '../components/shared/SectionTitle';
import CTASection from '../components/shared/CTASection';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update page title
    document.title = 'About Us | BuildMaster Construction';

    // Animate mission section
    if (missionRef.current) {
      gsap.fromTo(
        missionRef.current.querySelectorAll('.mission-animate'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: missionRef.current,
            start: 'top 70%',
          },
        }
      );
    }

    // Animate values section
    if (valuesRef.current) {
      gsap.fromTo(
        valuesRef.current.querySelectorAll('.value-card'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: valuesRef.current,
            start: 'top 70%',
          },
        }
      );
    }

    // Animate team section
    if (teamRef.current) {
      gsap.fromTo(
        teamRef.current.querySelectorAll('.team-member'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: teamRef.current,
            start: 'top 70%',
          },
        }
      );
    }
  }, []);

  const teamMembers = [
    {
      name: 'Robert Williams',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'With over 30 years of experience in construction, Robert founded BuildMaster to deliver exceptional quality and service to clients.'
    },
    {
      name: 'Jennifer Lee',
      role: 'Chief Architect',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Jennifer brings creative vision and technical expertise to every project, ensuring both aesthetic appeal and structural integrity.'
    },
    {
      name: 'Michael Thompson',
      role: 'Project Manager',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Michael\'s attention to detail and organizational skills ensure that all projects are completed on time and within budget.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Interior Designer',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Sarah transforms spaces with her innovative designs, creating functional and beautiful interiors for all our projects.'
    }
  ];

  const coreValues = [
    {
      title: 'Quality',
      description: 'We never compromise on the quality of materials or workmanship in any project we undertake.'
    },
    {
      title: 'Integrity',
      description: 'Honest communication and transparent practices are the foundation of our business relationships.'
    },
    {
      title: 'Innovation',
      description: 'We continuously seek innovative solutions and embrace new technologies in construction.'
    },
    {
      title: 'Reliability',
      description: 'Our clients can depend on us to deliver projects on time, within budget, and to specification.'
    },
    {
      title: 'Safety',
      description: 'The safety of our workers, clients, and the public is our top priority on every project.'
    },
    {
      title: 'Sustainability',
      description: 'We are committed to environmentally responsible construction practices and materials.'
    }
  ];

  return (
    <>
      <PageHeader 
        title="About BuildMaster Construction" 
        subtitle="Learn about our company, our mission, and our dedicated team"
        backgroundImage="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Company Story */}
      <section className="section py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Our Story" 
                subtitle="Building excellence since 2000"
              />
              <p className="text-gray-600 mb-6">
                BuildMaster Construction was founded in 2000 by Robert Williams, a master builder with a vision 
                of creating a construction company that would prioritize quality craftsmanship, innovative design, 
                and exceptional customer service.
              </p>
              <p className="text-gray-600 mb-6">
                Over the past two decades, we have grown from a small local contractor to one of the region's most 
                respected construction firms, with a portfolio spanning residential homes, commercial buildings, 
                and major renovation projects.
              </p>
              <p className="text-gray-600">
                Today, BuildMaster employs a team of over 150 construction professionals, including architects, 
                engineers, project managers, and skilled tradespeople, all committed to our founding principles 
                of excellence, integrity, and client satisfaction.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="BuildMaster team at work" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-blue-100 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="section bg-blue-900 py-16 md:py-24 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="mission-animate">
              <SectionTitle 
                title="Our Mission" 
                light
              />
              <p className="text-blue-100 mb-6">
                At BuildMaster Construction, our mission is to deliver exceptional construction services that exceed 
                client expectations. We are committed to creating spaces that inspire, endure, and add value to our 
                clients' lives and businesses.
              </p>
              <p className="text-blue-100">
                We achieve this through our unwavering commitment to quality craftsmanship, innovative solutions, 
                and sustainable building practices, all delivered by a team of passionate construction professionals.
              </p>
            </div>
            <div className="mission-animate">
              <SectionTitle 
                title="Our Vision" 
                light
              />
              <p className="text-blue-100 mb-6">
                Our vision is to be the most trusted and respected construction company in the region, known for 
                our exceptional quality, innovation, and client satisfaction.
              </p>
              <p className="text-blue-100">
                We strive to be a leader in sustainable construction practices, embracing new technologies and 
                methods that enhance both the building process and the final product. We envision a future where 
                our buildings stand as testaments to our commitment to excellence and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="section py-16 md:py-24">
        <div className="container-custom">
          <SectionTitle 
            title="Our Core Values" 
            subtitle="The principles that guide everything we do"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section ref={teamRef} className="section bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <SectionTitle 
            title="Meet Our Team" 
            subtitle="The experienced professionals behind our success"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                  <p className="text-orange-500 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Construction site" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <SectionTitle 
                title="Why Choose BuildMaster" 
                subtitle="What sets us apart from the competition"
              />
              <div className="space-y-4">
                {[
                  'Over 25 years of industry experience',
                  'A team of certified and highly skilled professionals',
                  'Comprehensive services from planning to completion',
                  'Use of premium materials and modern techniques',
                  'Strict adherence to timelines and budgets',
                  'Outstanding client support and communication',
                  'Sustainable building practices',
                  'Fully licensed, bonded, and insured'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Begin Your Construction Journey?"
        subtitle="Let's discuss your project and how BuildMaster can bring your vision to life."
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />
    </>
  );
};

export default AboutPage;