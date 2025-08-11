'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Hero = () => {
  const [imgSrc, setImgSrc] = useState<string>('/profile.jpg');
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Manas Doshi
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Computer Science Student
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
              Experienced in Python, Java, SQL, and Power BI. Proficient in software development,
              data analysis, and predictive modeling. Adept at building scalable systems and visualizing insights for business
              decision-making.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Contact Me
              </a>
              <a href="#projects" className="btn-outline">
                View Projects
              </a>
            </div>
            <div className="flex mt-8 space-x-4">
              <Link 
                href="https://github.com/themanasdoshi" 
                target="_blank" 
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                <FiGithub size={24} />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/manas-doshi4114" 
                target="_blank" 
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                <FiLinkedin size={24} />
              </Link>
              <Link 
                href="mailto:manasdoshi999@gmail.com" 
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                <FiMail size={24} />
              </Link>
              <Link 
                href="tel:+919421047700" 
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                <FiPhone size={24} />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full flex items-center justify-center">
              <div className="relative w-96 h-96 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-blue-500/20 shadow-xl bg-gray-200 dark:bg-gray-800">
                <Image
                  src={imgSrc}
                  alt="Profile photo of Manas Doshi"
                  fill
                  sizes="(max-width: 768px) 24rem, 24rem"
                  className="object-cover"
                  priority
                  onError={() => setImgSrc('/me.jpg')}
                />
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
              Baramati, Pune, India
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;