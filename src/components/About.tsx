'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Computer Science student experienced in Python, Java, SQL, and Power BI. Proficient in software development,
              data analysis, and predictive modeling. Adept at building scalable systems and visualizing insights for business
              decision-making.
            </p>
            <p className="text-lg mb-6">
              {/* Corrected Line Below */}
              I&apos;m passionate about leveraging technology to solve real-world problems. My academic background in Computer Science
              has equipped me with a strong foundation in algorithms, data structures, and software engineering principles.
              {/* Corrected Line Below */}
              I&apos;m particularly interested in machine learning and artificial intelligence applications.
            </p>
            <p className="text-lg">
              Currently seeking opportunities in data engineering or software development where I can apply my skills and continue
              to grow as a professional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;