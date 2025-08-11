'use client';

import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiUsers } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Languages',
    icon: <FiCode size={24} />,
    skills: ['Java', 'Python', 'SQL']
  },
  {
    title: 'Core CS',
    icon: <FiServer size={24} />,
    skills: ['Data Structures', 'Algorithms', 'OOP', 'OS', 'CN', 'DBMS', 'Software Engineering']
  },
  {
    title: 'Technologies',
    icon: <FiDatabase size={24} />,
    skills: ['AWS', 'GCP', 'Power BI', 'Git', 'HTML/CSS/JS', 'MongoDB', 'MySQL']
  },
  {
    title: 'AI/ML',
    icon: <FiServer size={24} />,
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Generative AI']
  },
  {
    title: 'Soft Skills',
    icon: <FiUsers size={24} />,
    skills: ['Public Speaking', 'Team Leadership']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-3 text-blue-600 dark:text-blue-400">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span 
                      key={skill}
                      className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;