'use client';

import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const certifications = [
  'Oracle Cloud Infrastructure 2025 Generative AI Professional',
  'Data Analyst in Power BI',
  'Generative AI Applications using Vertex AI - Google',
  'Java Programming Masterclass - Udemy',
  'AWS Academy Graduate - AWS Academy Cloud Architecting'
];



const Certifications = () => {

  return (
    <section id="certifications" className="pt-20 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
          
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <FiAward className="text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-lg">{cert}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;