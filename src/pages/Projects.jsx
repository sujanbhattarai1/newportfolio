import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce web application with features like product listings, cart management, and payment integration.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      demoLink: '#',
      githubLink: '#',
      gradient: 'from-primary to-secondary',
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'A responsive dashboard for social media analytics, allowing users to track engagement, growth, and trends.',
      technologies: ['Angular', 'Firebase', 'Chart.js'],
      demoLink: '#',
      githubLink: '#',
      gradient: 'from-secondary to-accent',
    },
    {
      id: 3,
      title: 'Blogging Platform',
      description: 'A modern blogging platform with user authentication, rich-text editors, and content categorization.',
      technologies: ['PHP', 'MySQL', 'Laravel'],
      demoLink: '#',
      githubLink: '#',
      gradient: 'from-accent to-primary',
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'A lightweight weather application that fetches real-time weather data using OpenWeatherMap API.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      demoLink: '#',
      githubLink: '#',
      gradient: 'from-primary via-secondary to-accent',
    },
  ];

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                {/* Gradient Header */}
                <div className={`h-3 w-full bg-gradient-to-r ${project.gradient}`}></div>

                <div className="p-8 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-gray-600 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <FaExternalLinkAlt />
                      <span>Demo</span>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary dark:border-primary-light text-primary dark:text-primary-light font-semibold rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-gray-900 transition-all duration-300"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
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

export default Projects;
