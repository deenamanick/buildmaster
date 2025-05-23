import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();
  
  // Page transition effect
  useEffect(() => {
    // Initialize page with fade in
    gsap.to('body', { 
      opacity: 1, 
      duration: 0.5, 
      ease: 'power1.out' 
    });
    
    // Fade content in on route change
    const content = document.querySelector('.page-content');
    if (content) {
      gsap.fromTo(
        content,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power1.out' }
      );
    }
    
    // Reset scroll position on page change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    </Layout>
  );
}

export default App;