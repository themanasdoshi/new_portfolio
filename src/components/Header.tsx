'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <Link href="/" className="text-xl font-bold font-poppins">
            Manas Doshi
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-blue-600 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link href="#education" className="hover:text-blue-600 transition-colors">
              Education
            </Link>
            <Link href="#contact" className="hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <div className="px-4 py-5 space-y-4">
            <Link 
              href="#about" 
              className="block hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#skills" 
              className="block hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link 
              href="#projects" 
              className="block hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="#education" 
              className="block hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Education
            </Link>
            <Link 
              href="#contact" 
              className="block hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;