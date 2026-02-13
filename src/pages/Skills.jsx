import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaJs, FaPython } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiC, SiCplusplus } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-500' },
    { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-500' },
    { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-500' },
    { name: 'React', icon: <FaReact />, color: 'text-cyan-500' },
    { name: 'Node.js', icon: <FaNode />, color: 'text-green-500' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-600' },
    { name: 'Python', icon: <FaPython />, color: 'text-blue-400' },
    { name: 'C', icon: <SiC />, color: 'text-blue-700' },
    { name: 'C++', icon: <SiCplusplus />, color: 'text-blue-600' },
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
              My Skills
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center space-y-3"
            >
              <div className={`text-6xl ${skill.color}`}>
                {skill.icon}
              </div>
              <p className="text-gray-800 dark:text-white font-semibold text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-2xl p-8 text-center border border-primary/20 dark:border-primary/10"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Always learning and exploring new technologies to stay current in the ever-evolving tech landscape
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
