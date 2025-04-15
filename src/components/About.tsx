"use client";

import { motion } from "framer-motion";
import { useAbout } from "@/utils/storage";
import ImageCarousel from "./ImageCarousel";

export default function About() {
  const { about } = useAbout();

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            My journey through technology, innovation, and leadership
          </p>
        </motion.div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <motion.div 
            className="lg:order-last lg:pr-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-96 overflow-hidden rounded-2xl shadow-xl">
              {about.image ? (
                <img
                  src={about.image}
                  alt={about.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                  {about.name}
                </div>
              )}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex flex-col gap-6 text-base leading-7 text-gray-700 dark:text-gray-300">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                My Story
              </h3>
              <p>
                {about.bio}
              </p>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Professional Experience
                </h4>
                <ul className="mt-4 space-y-4">
                  {about.experience.map((exp, index) => (
                    <li key={index} className="flex gap-x-3">
                      <div className="flex-none w-1.5 h-1.5 mt-2 rounded-full bg-blue-500" />
                      <p>
                        <span className="font-semibold text-gray-900 dark:text-white">{exp.title}</span> at{' '}
                        <span className="font-semibold text-gray-900 dark:text-white">{exp.company}</span>
                        {exp.description && `, ${exp.description}`}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Technical Skills
                </h4>
                <ul className="mt-4 space-y-4">
                  <li className="flex gap-x-3">
                    <div className="flex-none w-1.5 h-1.5 mt-2 rounded-full bg-blue-500" />
                    <p><span className="font-semibold text-gray-900 dark:text-white">Web Development:</span> Built full-stack applications with a clear separation between frontend and backend for better structure and scalability, including a CSV search tool with clean UI and efficient search logic.</p>
                  </li>
                  <li className="flex gap-x-3">
                    <div className="flex-none w-1.5 h-1.5 mt-2 rounded-full bg-blue-500" />
                    <p><span className="font-semibold text-gray-900 dark:text-white">Hardware & IoT:</span> Built IoT-based systems using Arduino, ESP8266/ESP32, and platforms like Blynk, bringing real-time data and control to everyday applications.</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Photo Carousel Section */}
        {about.carouselImages && about.carouselImages.length > 0 && (
          <motion.div 
            className="mt-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Photo Gallery
              </h3>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                A glimpse into my journey and experiences
              </p>
            </div>
            <ImageCarousel 
              images={about.carouselImages} 
              className="mx-auto max-w-4xl" 
            />
          </motion.div>
        )}
      </div>
    </section>
  );
} 