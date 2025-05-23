import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, HardHat } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        '.footer-content > div',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
          },
        }
      );
    }
  }, []);

  return (
    <footer ref={footerRef} className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center text-2xl font-bold text-white mb-4">
              <HardHat className="mr-2 text-orange-500" size={28} />
              <span>BuildMaster</span>
            </Link>
            <p className="text-blue-100 mb-6">
              Professional construction services with over 25 years of industry experience. 
              Building the future with quality and precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-orange-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-orange-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-orange-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-orange-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-orange-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-100 hover:text-orange-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-100 hover:text-orange-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-blue-100 hover:text-orange-500 transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/blog" className="text-blue-100 hover:text-orange-500 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-100 hover:text-orange-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-blue-100">Residential Construction</li>
              <li className="text-blue-100">Commercial Buildings</li>
              <li className="text-blue-100">Renovation & Remodeling</li>
              <li className="text-blue-100">Interior Design</li>
              <li className="text-blue-100">Project Management</li>
              <li className="text-blue-100">Consulting Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 text-orange-500 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-blue-100">123 Construction Ave, Building City, BC 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-orange-500 flex-shrink-0" size={20} />
                <span className="text-blue-100">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-orange-500 flex-shrink-0" size={20} />
                <span className="text-blue-100">info@buildmaster.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} BuildMaster Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;