'use client';

import { motion } from 'framer-motion';
import { FiUsers } from 'react-icons/fi';

const extracurricularData = [
  {
    organization: 'Amazon Machine Learning Summer School',
    role: 'Selected Participant',
    duration: '2025',
    description: 'Selected for the prestigious Amazon Machine Learning Summer School program. Gained advanced knowledge in machine learning algorithms, deep learning, and practical AI applications through hands-on projects and mentorship from Amazon engineers.'
  },
  {
    organization: 'Amhi Marathi Association',
    role: 'Documentation Team Lead',
    duration: 'Feb 2024 - Mar 2025',
    description: 'Led documentation of association activities, producing clear and professional reports for all stakeholders.'
  }
];

const Extracurricular = () => {
  return (
    <section id="extracurricular" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Extracurricular Activities</h2>
          
          <div className="max-w-3xl mx-auto">
            {extracurricularData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-6 last:mb-0"
              >
                <div className="flex items-start">
                  <FiUsers className="text-blue-600 dark:text-blue-400 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h3 className="text-xl font-semibold">{item.organization}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 sm:ml-4">{item.duration}</span>
                    </div>
                    <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">{item.role}</p>
                    <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
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

export default Extracurricular;