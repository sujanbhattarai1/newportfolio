import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaBrain } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Freelancer',
      period: '2024 - Present',
      description: 'Worked on projects using HTML, CSS, JS, Node.js, PHP, SQL, and MongoDB. Developed full-stack web applications for various clients, focusing on creating responsive and user-friendly interfaces with robust backend systems.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'PHP', 'SQL', 'MongoDB'],
      icon: <FaBriefcase />,
    },
    {
      title: 'Machine Learning (AI)',
      company: 'Self-Taught',
      period: '2024 - Ongoing',
      description: 'Actively learning and exploring machine learning and artificial intelligence. Building foundational knowledge in AI algorithms, neural networks, and practical applications of machine learning in real-world scenarios.',
      skills: ['Python', 'Machine Learning', 'AI', 'Data Science'],
      icon: <FaBrain />,
    },
  ];

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl text-white flex-shrink-0">
                  <div className="text-3xl">{exp.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-3">
                    {exp.company}
                  </p>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
                    <FaCalendar className="text-primary" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 text-primary dark:text-primary-light rounded-lg border border-primary/30 dark:border-primary/20 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
