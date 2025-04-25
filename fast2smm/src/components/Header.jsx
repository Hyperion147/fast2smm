// components/Header.js
import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div 
      className="header h-[calc(100vh-70px)] flex flex-col justify-center items-center text-center px-5 text-white"
      style={{
        background: 'linear-gradient(rgba(10, 46, 92, 0.85), rgba(10, 46, 92, 0.85)), url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80) no-repeat center center',
        backgroundSize: 'cover'
      }}
      id="home"
    >
      <h1 className="text-6xl font-heading mb-5">Fast2SMM</h1>
      <p className="text-xl max-w-3xl mb-10 font-normal">Your Premier Social Media Branding Partner</p>
      <Link 
        to="contact" 
        smooth={true} 
        duration={500} 
        className="cta-button inline-block px-9 py-4 bg-accent text-white rounded-md font-semibold font-body hover:bg-[#3a80d2] hover:-translate-y-0.5 transition-all"
      >
        Transform Your Brand Today
      </Link>
    </div>
  );
};

export default Header;