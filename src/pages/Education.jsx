import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt, FaBook } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: "Bachelor's in Computer Engineering",
      institution: 'Pulchowk Campus',
      location: 'Lalitpur, Nepal',
      period: '2023 - Present',
      description: 'Currently pursuing comprehensive education in computer engineering with focus on software development, algorithms, and system design.',
      subjects: ['C', 'C++', 'Data Structures and Algorithms (DSA)', 'Probability and Statistics'],
    },
    {
      degree: 'High School Education',
      institution: 'Everest College, Butwal',
      location: 'Butwal, Nepal',
      period: '2021 - 2022',
      description: 'Completed high school education with focus on science and technology subjects.',
      subjects: ['HTML', 'CSS', 'JavaScript', 'PHP'],
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
              Education
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl text-white flex-shrink-0">
                  <FaGraduationCap className="text-4xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <FaCalendar className="text-primary" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <FaMapMarkerAlt className="text-secondary" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {edu.description}
                  </p>
                  <div className="mt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <FaBook className="text-accent" />
                      <h4 className="font-semibold text-gray-800 dark:text-white">Key Subjects:</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 text-primary dark:text-primary-light rounded-lg border border-primary/30 dark:border-primary/20 font-medium"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
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

export default Education;
