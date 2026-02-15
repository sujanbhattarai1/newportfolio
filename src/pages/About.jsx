import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaHeart } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaGraduationCap />, value: 'Student', label: 'Computer Engineering' },
    { icon: <FaCode />, value: '5+', label: 'Projects Completed' },
    { icon: <FaHeart />, value: '100%', label: 'Passion' },
  ];

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-30"></div>
              <img 
                src="/images/myphoto.jpg" 
                alt="Sujan Bhattarai" 
                className="relative rounded-3xl shadow-2xl border-4 border-white dark:border-gray-800 w-full max-w-md object-cover"
              />
            </div>
          </motion.div>



          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              Hello! I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Sujan Bhattarai</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate and dedicated <strong>Computer Engineering Student</strong> with a strong enthusiasm for technology. I'm a <strong>fast learner</strong> who thrives on solving complex problems and constantly expanding my knowledge in the ever-evolving tech world.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I love working on innovative projects, exploring new technologies, and building solutions that make a difference. My areas of interest include <strong>web development</strong>, <strong>software engineering</strong>, and emerging fields like <strong>AI and machine learning</strong>.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              As a tech enthusiast, I enjoy collaborating with like-minded individuals, contributing to team success, and continuously learning to stay ahead of the curve. I believe in the power of technology to transform ideas into reality.
            </p>
          </motion.div>

          
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-4">
                <div className="text-4xl text-primary dark:text-primary-light">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
