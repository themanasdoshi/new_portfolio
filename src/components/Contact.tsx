'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <FiMail className="text-blue-600 dark:text-blue-400 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:manasdoshi999@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      manasdoshi999@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FiPhone className="text-blue-600 dark:text-blue-400 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+919421047700" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      +91 9421047700
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FiMapPin className="text-blue-600 dark:text-blue-400 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Baramati, Pune, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex mt-8 space-x-4">
                <a 
                  href="https://github.com/themanasdoshi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <FiGithub size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/manas-doshi4114" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <FiLinkedin size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;