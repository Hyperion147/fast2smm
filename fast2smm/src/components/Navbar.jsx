// components/Navbar.js
import React, { useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id], div.header[id]');
      const navLinks = document.querySelectorAll('.nav-links a');
      const navbarHeight = document.querySelector('.navbar').offsetHeight;

      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 50;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(a => {
        a.classList.remove('text-accent', 'border-b-2', 'border-accent');
        if (a.getAttribute('href') === `#${current}`) {
          a.classList.add('text-accent', 'border-b-2', 'border-accent');
        }
      });

      if (!current && window.pageYOffset < (document.getElementById('services')?.offsetTop || 500)) {
        navLinks.forEach(a => a.classList.remove('text-accent', 'border-b-2', 'border-accent'));
        document.querySelector('.nav-links a[href="#services"]').classList.add('text-accent', 'border-b-2', 'border-accent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar bg-white py-4 shadow-md sticky top-0 z-50 w-full">
      <div className="container mx-auto px-5 flex justify-between items-center">
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="logo font-heading text-2xl text-primary font-bold cursor-pointer"
        >
          Fast2SMM
        </Link>
        <div className="nav-links flex">
          <Link 
            to="services" 
            smooth={true} 
            duration={500} 
            className="ml-6 font-semibold pb-1 border-b-2 border-transparent hover:text-accent transition-colors cursor-pointer"
            activeClass="text-accent border-accent"
          >
            Services
          </Link>
          <Link 
            to="audience" 
            smooth={true} 
            duration={500} 
            className="ml-6 font-semibold pb-1 border-b-2 border-transparent hover:text-accent transition-colors cursor-pointer"
            activeClass="text-accent border-accent"
          >
            Who We Serve
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="ml-6 font-semibold pb-1 border-b-2 border-transparent hover:text-accent transition-colors cursor-pointer"
            activeClass="text-accent border-accent"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;