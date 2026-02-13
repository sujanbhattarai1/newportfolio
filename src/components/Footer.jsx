import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/sujanbhattarai1' },
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/sujanbhattarai1' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/sujan.bhattarai1' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              Sujan Bhattarai
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Computer Engineering Student & Developer
            </p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
            Made by Sujan Bhattarai © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
