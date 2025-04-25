// components/Services.js
import React from 'react';
import { FaVideo, FaBullhorn, FaUsersCog } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaVideo className="text-5xl text-accent mb-5" />,
      title: 'Video Production',
      description: 'Professional shooting and editing to capture your brand\'s essence'
    },
    {
      icon: <FaBullhorn className="text-5xl text-accent mb-5" />,
      title: 'Viral Marketing',
      description: 'Strategic content distribution to maximize reach and engagement'
    },
    {
      icon: <FaUsersCog className="text-5xl text-accent mb-5" />,
      title: 'Social Media Management',
      description: 'Comprehensive social media strategy and execution'
    }
  ];

  return (
    <section className="py-20 px-5 text-center bg-lightGray" id="services">
      <div className="container mx-auto">
        <h2 className="text-4xl font-heading mb-15">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-15">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-10 rounded-xl shadow-md transition-all hover:-translate-y-2 hover:shadow-lg bg-white"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards'
              }}
            >
              {service.icon}
              <h3 className="text-2xl font-heading mb-3">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;