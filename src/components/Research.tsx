'use client';

import { motion } from 'framer-motion';
import { FiFileText } from 'react-icons/fi';

const researchData = [
  {
    title: 'Edge-AI Enabled IoT Framework for Nutrient-Rich Microgreens Production Under Indoor Conditions',
    venue: 'IEEE Conference',
    date: 'Jul 2025'
  }
];

const Research = () => {
  return (
    <section id="research" className="pt-16 pb-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Research & Publications</h2>
          
          <div className="max-w-3xl mx-auto">
            {researchData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-6 last:mb-0"
              >
                <div className="flex items-start">
                  <FiFileText className="text-blue-600 dark:text-blue-400 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <p className="text-gray-700 dark:text-gray-300">{item.venue}</p>
                      <p className="text-gray-500 dark:text-gray-400">{item.date}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;