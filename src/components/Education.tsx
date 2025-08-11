'use client';

import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'Vellore Institute of Technology, Amaravati',
    degree: 'B.Tech in Computer Science & Engineering',
    duration: 'Sept 2022 - Jul 2026',
    grade: 'CGPA: 9.01/10'
  },
  {
    institution: 'Ajitdada English Medium School, Katphal',
    degree: 'Class XII (HSC)',
    duration: '2022',
    grade: '87.17%'
  },
  {
    institution: 'Vidya Pratishthan\'s English Medium School, Baramati',
    degree: 'Class X (CBSE)',
    duration: '2020',
    grade: '93.4%'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Education</h2>
          
          <div className="max-w-3xl mx-auto">
            {educationData.map((item, index) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8 last:mb-0 bg-white/80 dark:bg-gray-800/90 p-6 rounded-lg shadow-sm backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.institution}</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-300 md:text-right font-medium">{item.duration}</span>
                </div>
                <p className="text-gray-800 dark:text-gray-200 font-medium">{item.degree}</p>
                <p className="text-blue-700 dark:text-blue-300 font-medium">{item.grade}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;