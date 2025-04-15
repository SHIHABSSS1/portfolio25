"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useAbout } from "@/utils/storage";
import { FiUser, FiCalendar, FiMapPin, FiFlag, FiBookOpen, FiAward } from "react-icons/fi";

export default function About() {
  const { about } = useAbout();

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 sm:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know my background, experience, and what drives me as a professional
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image and Details */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-96 lg:h-[450px] overflow-hidden rounded-xl bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center shadow-lg">
              {about.image ? (
                <Image 
                  src={about.image} 
                  alt={about.name} 
                  fill 
                  className="object-cover"
                />
              ) : (
                <div className="text-8xl text-gray-400 dark:text-gray-600">
                  <FiUser />
                </div>
              )}
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-2xl"></div>
              
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">{about.name}</h3>
                <p className="text-gray-200">{about.title}</p>
              </div>
            </div>
            
            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md">
                <div className="flex items-center mb-2">
                  <FiCalendar className="text-blue-600 dark:text-blue-400 mr-2" />
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">Experience</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{about.experience} years</p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md">
                <div className="flex items-center mb-2">
                  <FiMapPin className="text-blue-600 dark:text-blue-400 mr-2" />
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">Location</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{about.location}</p>
              </div>
            </div>
          </motion.div>
          
          {/* Bio and Details */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Biography</h3>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {about.bio}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-700 p-5 rounded-xl shadow-md flex items-start">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 mr-4">
                  <FiFlag className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Nationality</h4>
                  <p className="text-gray-700 dark:text-gray-300">{about.nationality}</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-5 rounded-xl shadow-md flex items-start">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 mr-4">
                  <FiBookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Education</h4>
                  <p className="text-gray-700 dark:text-gray-300">{about.education}</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-5 rounded-xl shadow-md flex items-start">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 mr-4">
                  <FiAward className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Languages</h4>
                  <p className="text-gray-700 dark:text-gray-300">{about.languages}</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-5 rounded-xl shadow-md">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {about.interests && about.interests.map((interest, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 