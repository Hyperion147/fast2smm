// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('services');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = document.querySelectorAll('section[id], div.header[id]');
      const navbarHeight = document.querySelector('.navbar').offsetHeight;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 50;
        if (window.pageYOffset >= sectionTop) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      startClosing();
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const startClosing = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
      document.body.style.overflow = 'auto';
    }, 300); // Match this with your transition duration
  };

  const isActive = (section) => activeSection === section;

  return (
    <nav className={`navbar bg-white py-4 sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-5 flex justify-between items-center">
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="logo font-heading text-2xl text-primary font-bold cursor-pointer"
          onClick={startClosing}
        >
          Fast2SMM
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link 
            to="services" 
            smooth={true} 
            duration={500} 
            className={`font-semibold pb-1 border-b-2 transition-colors ${isActive('services') ? 'text-accent border-accent' : 'border-transparent hover:text-accent'}`}
          >
            Services
          </Link>
          <Link 
            to="audience" 
            smooth={true} 
            duration={500} 
            className={`font-semibold pb-1 border-b-2 transition-colors ${isActive('audience') ? 'text-accent border-accent' : 'border-transparent hover:text-accent'}`}
          >
            Who We Serve
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className={`font-semibold pb-1 border-b-2 transition-colors ${isActive('contact') ? 'text-accent border-accent' : 'border-transparent hover:text-accent'}`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-primary focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`
          md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'bg-black bg-opacity-50' : 'bg-transparent pointer-events-none'}
          ${isClosing ? 'bg-transparent' : ''}
        `} onClick={startClosing}>
          {/* Mobile Menu Panel */}
          <div className={`
            absolute top-0 right-0 h-full w-3/4 bg-white p-6
            transition-transform duration-300 ease-in-out
            ${isMenuOpen && !isClosing ? 'translate-x-0' : 'translate-x-full'}
          `} onClick={e => e.stopPropagation()}>
            {/* Close Button - Simple and clean */}
            <button 
              className="absolute top-6 right-6 text-gray-400 hover:text-accent transition-colors"
              onClick={startClosing}
              aria-label="Close menu"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Menu Content */}
            <div className="flex flex-col space-y-6 mt-20">
              <Link 
                to="services" 
                smooth={true} 
                duration={500} 
                className={`
                  text-lg font-semibold py-2 transition-colors
                  ${isActive('services') ? 'text-accent' : 'text-gray-800 hover:text-accent'}
                `}
                onClick={startClosing}
              >
                Services
              </Link>
              <Link 
                to="audience" 
                smooth={true} 
                duration={500} 
                className={`
                  text-lg font-semibold py-2 transition-colors
                  ${isActive('audience') ? 'text-accent' : 'text-gray-800 hover:text-accent'}
                `}
                onClick={startClosing}
              >
                Who We Serve
              </Link>
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                className={`
                  text-lg font-semibold py-2 transition-colors
                  ${isActive('contact') ? 'text-accent' : 'text-gray-800 hover:text-accent'}
                `}
                onClick={startClosing}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;