import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`bg-gray-100 dark:bg-gray-900 py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} Manas Doshi. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <Link 
              href="https://github.com/themanasdoshi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <FiGithub size={20} />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/manas-doshi4114" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <FiLinkedin size={20} />
            </Link>
            <Link 
              href="mailto:manasdoshi999@gmail.com" 
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <FiMail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;