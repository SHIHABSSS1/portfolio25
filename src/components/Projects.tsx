"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Project data - replace with actual projects
const projects = [
  {
    id: 1,
    title: "CSV Search Tool",
    description: "A user-friendly tool for searching through CSV files with clean UI, efficient search logic, and smooth user interaction.",
    tags: ["React", "Node.js", "CSV Parsing", "UI/UX"],
    image: "/images/project1.jpg", // Replace with actual image
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    id: 2,
    title: "IoT Home Automation",
    description: "Smart home system built with ESP8266/ESP32 and Blynk platform for real-time monitoring and control of home appliances.",
    tags: ["Arduino", "ESP8266", "IoT", "Blynk"],
    image: "/images/project2.jpg", // Replace with actual image
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    id: 3,
    title: "Digital Subscription Platform",
    description: "Subscription management system for digital products like Canva and Netflix, including user management and payment processing.",
    tags: ["Web Development", "E-commerce", "Payment Gateway"],
    image: "/images/project3.jpg", // Replace with actual image
    github: "https://github.com/",
    demo: "https://example.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Explore my latest work spanning web development, IoT solutions, and digital platforms
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-900"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                {/* Replace with actual images */}
                <div className="h-full w-full bg-gradient-to-br from-blue-500/70 to-purple-600/70 flex items-center justify-center text-white text-xl font-bold">
                  {project.title}
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <FaGithub className="h-6 w-6" />
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <FaExternalLinkAlt className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 