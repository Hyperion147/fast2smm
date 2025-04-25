// components/Services.js
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';

const Services = () => {
  const content = [
    {
      title: "Video Production",
      description: "Professional shooting and editing to capture your brand's essence"
    },
    {
      title: "Viral Marketing",
      description: "Strategic content distribution to maximize reach and engagement"
    },
    {
      title: "Social Media Management",
      description: "Comprehensive social media strategy and execution"
    }
  ];

  return (
    <div id='services' className="w-full">
      <StickyScroll content={content} />
    </div>
  );
};

export default Services;