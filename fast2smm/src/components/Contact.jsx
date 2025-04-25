// components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-5 text-center bg-lightGray">
      <div className="container mx-auto">
        <h2 className="text-4xl font-heading mb-4">Get In Touch</h2>
        <p className="mb-10 max-w-2xl mx-auto text-gray-600">
          Ready to elevate your brand? Contact us today for a free consultation!
        </p>
        <form 
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto text-left bg-white p-10 rounded-xl shadow-md"
        >
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 font-semibold text-primary">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 font-semibold text-primary">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="block mb-2 font-semibold text-primary">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full px-9 py-4 bg-accent text-white rounded-md font-semibold bg-[#3a80d2] hover:text-gray-950 hover:bg-blue-100 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;