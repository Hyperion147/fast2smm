// components/TargetAudience.js
import React from 'react';
import { FaChalkboardTeacher, FaUserMd, FaComments } from 'react-icons/fa';

const TargetAudience = () => {
  const audiences = [
    {
      icon: <FaChalkboardTeacher className="text-4xl text-primary mb-4" />,
      title: 'Coaches',
      description: 'Expand your coaching business through powerful social media presence'
    },
    {
      icon: <FaUserMd className="text-4xl text-primary mb-4" />,
      title: 'Doctors',
      description: 'Build trust and credibility in your medical practice'
    },
    {
      icon: <FaComments className="text-4xl text-primary mb-4" />,
      title: 'Facilitators',
      description: 'Reach more clients and grow your facilitation business'
    }
  ];

  return (
    <section className="py-20 px-5 text-center bg-white" id="audience">
      <div className="container mx-auto">
        <h2 className="text-4xl font-heading mb-15">Who We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-15">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="p-8 text-center rounded-xl shadow-sm bg-lightGray"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards'
              }}
            >
              {audience.icon}
              <h3 className="text-xl font-heading mb-3">{audience.title}</h3>
              <p>{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;