import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram, FaFileDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = [
    'Computer Engineering Student',
    'Developer',
    'Freelancer',
  ];

  useEffect(() => {
    const handleType = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      const updatedText = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
        setTypingSpeed(50);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(100);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/sujanbhattarai1', color: 'hover:text-blue-500 dark:hover:text-blue-400' },
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/sujanbhattarai1', color: 'hover:text-gray-800 dark:hover:text-gray-300' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/sujan.bhattarai1', color: 'hover:text-pink-500 dark:hover:text-pink-400' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-96 h-96 top-1/2 right-0 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 -bottom-48 left-1/3 bg-accent/20 dark:bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-light"
              >
                Hello, I'm
              </motion.h2>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold"
              >
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Sujan Bhattarai
                </span>
              </motion.h1>
              
              <div className="h-24 flex flex-col justify-center">
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">I'm a</p>
                <p className="text-2xl md:text-4xl font-semibold text-primary dark:text-primary-light min-h-[50px]">
                  {text}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </Link>
              <a 
                href="/resume/sujan_resume.pdf" 
                download 
                className="px-8 py-4 border-2 border-primary dark:border-primary-light text-primary dark:text-primary-light rounded-lg font-semibold hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-gray-900 transition-all duration-300 flex items-center space-x-2"
              >
                <FaFileDownload />
                <span>Resume</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex space-x-6 pt-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className={`text-4xl text-gray-600 dark:text-gray-400 ${link.color} transition-all duration-300 transform hover:scale-125`}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Animated Code/Tech Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-md h-[500px]">
              {/* Central Glowing Orb */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-primary via-secondary to-accent blur-3xl opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Floating Code Brackets */}
              <motion.div
                className="absolute top-20 left-10 text-6xl font-bold text-primary/40 dark:text-primary-light/40"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                &lt;/&gt;
              </motion.div>

              {/* Floating Curly Braces */}
              <motion.div
                className="absolute bottom-20 right-10 text-5xl font-bold text-secondary/40 dark:text-secondary-light/40"
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                &#123; &#125;
              </motion.div>

              {/* Geometric Shapes */}
              <motion.div
                className="absolute top-32 right-16 w-20 h-20 border-4 border-accent/30 dark:border-accent-light/30 rounded-lg"
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <motion.div
                className="absolute bottom-32 left-16 w-16 h-16 border-4 border-primary/30 dark:border-primary-light/30"
                animate={{
                  rotate: [360, 270, 180, 90, 0],
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    background: i % 3 === 0 ? '#6366F1' : i % 3 === 1 ? '#EC4899' : '#14B8A6',
                    top: `${20 + i * 15}%`,
                    left: `${10 + i * 12}%`,
                    opacity: 0.6,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.sin(i) * 20, 0],
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                />
              ))}

              {/* Center Icon/Terminal Window */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Terminal Header */}
                <div className="bg-gradient-to-r from-primary to-secondary p-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-white text-xs font-mono ml-2">Info</span>
                </div>

                {/* Code Display */}
                <div className="p-6 space-y-3 font-mono text-sm">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="text-gray-600 dark:text-gray-400"
                  >
                    <span className="text-secondary">const</span>{' '}
                    <span className="text-primary">developer</span> = &#123;
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="ml-4 text-gray-600 dark:text-gray-400"
                  >
                    <span className="text-accent">name</span>: 
                    <span className="text-secondary"> "Sujan"</span>,
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                    className="ml-4 text-gray-600 dark:text-gray-400"
                  >
                    <span className="text-accent">role</span>: 
                    <span className="text-secondary"> "Developer"</span>,
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                    className="ml-4 text-gray-600 dark:text-gray-400"
                  >
                    <span className="text-accent">skills</span>: 
                    <span className="text-primary"> ["C++","Python","React",...]</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                    className="text-gray-600 dark:text-gray-400"
                  >
                    &#125;;
                  </motion.div>

                  {/* Blinking Cursor */}
                  <motion.span
                    className="inline-block w-2 h-4 bg-primary ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </div>

                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary/10 via-secondary/5 to-transparent"></div>
              </motion.div>

              {/* Orbiting Rings */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-dashed border-primary/20 dark:border-primary-light/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-dashed border-secondary/20 dark:border-secondary-light/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Home;
