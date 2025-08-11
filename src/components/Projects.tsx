'use client';

import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Hydroponics Microgreen System',
    description: 'Built an IoT-based system to collect, analyze, and visualize real-time environmental data for hydroponics. Developed machine learning pipelines using YOLO-NAS for automated plant growth monitoring (95% detection accuracy). Integrated ESP32 microcontrollers and cloud database to enable real-time InfluxDB dashboards.',
    technologies: ['Python', 'YOLO-NAS', 'ESP32'],
    date: 'Dec 2024',
    github: ''
  },
  {
    title: 'Multilingual AI Question Generator',
    description: 'Developed an NLP pipeline to process multilingual text data from diverse sources and generate contextual questions. Built Streamlit-based UI for interactive visualization and evaluation of generated questions.',
    technologies: ['Python', 'Streamlit', 'NLP'],
    date: 'August 2024',
    github: 'https://github.com/pranamyaRK/Inquisitive-Multilingual-AI-Question-Generator'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech}
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <div className="flex space-x-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors flex items-center"
                      >
                        <FiGithub className="mr-1" /> Code
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;