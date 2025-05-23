import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Testimonials from '../components/home/Testimonials';
import Stats from '../components/home/Stats';
import CTASection from '../components/shared/CTASection';

const HomePage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'BuildMaster Construction | Expert Building Solutions';
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Stats />
      <FeaturedProjects />
      <Testimonials />
      <CTASection
        title="Ready to Start Your Construction Project?"
        subtitle="Contact us today for a free consultation and estimate on your upcoming project."
        buttonText="Request a Quote"
        buttonLink="/quote"
      />
    </>
  );
};

export default HomePage;