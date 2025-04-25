// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white/80 py-10 text-center px-5">
      <p>&copy; {new Date().getFullYear()} Fast2SMM. All Rights Reserved.</p>
      <p className="mt-2">Contact us: info@fast2smm.com | (123) 456-7890</p>
    </footer>
  );
};

export default Footer;