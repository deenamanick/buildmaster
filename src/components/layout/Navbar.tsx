import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, HardHat } from "lucide-react";
import gsap from "gsap";

interface NavbarProps {
  scrolled: boolean;
}

const Navbar = ({ scrolled }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });

    if (mobileMenuRef.current) {
      timeline.current
        .fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        )
        .fromTo(
          ".mobile-link",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, stagger: 0.1, ease: "power2.out" },
          "-=0.1"
        );
    }
  }, []);

  useEffect(() => {
    if (timeline.current) {
      if (mobileMenuOpen) {
        timeline.current.play();
      } else {
        timeline.current.reverse();
      }
    }
  }, [mobileMenuOpen]);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className={`flex items-center text-2xl font-bold ${
              scrolled ? "text-blue-900" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <HardHat className="mr-2 text-orange-500" size={28} />
            <span>BuildMaster</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["/", "/about", "/blog", "/portfolio", "/contact"].map(
              (path, index) => {
                const labels = [
                  "Home",
                  "About",
                  "Blog",
                  "Portfolio",
                  "Contact",
                ];
                return (
                  <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                      `font-medium transition-colors ${
                        isActive
                          ? "text-orange-500"
                          : scrolled
                          ? "text-blue-900 hover:text-orange-500"
                          : "text-white hover:text-orange-500"
                      }`
                    }
                  >
                    {labels[index]}
                  </NavLink>
                );
              }
            )}
          </nav>

          <div className="hidden md:block">
            <Link to="/quote" className="btn btn-primary">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-900 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`absolute top-full left-0 right-0 bg-white shadow-lg md:hidden overflow-hidden ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          {["/", "/about", "/blog", "/portfolio", "/contact"].map(
            (path, index) => {
              const labels = ["Home", "About", "Blog", "Portfolio", "Contact"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `mobile-link block py-2 font-medium ${
                      isActive ? "text-orange-500" : "text-blue-900"
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {labels[index]}
                </NavLink>
              );
            }
          )}
          <Link
            to="/quote"
            className="mobile-link btn btn-primary w-full text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
