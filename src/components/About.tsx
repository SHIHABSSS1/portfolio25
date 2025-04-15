"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
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
              {/* Replace with your actual image */}
              <div className="h-full w-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                MD SHIHAB HOSSAIN
              </div>
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
                I'm a passionate Electronics Engineer with a diverse background in embedded systems, web development, digital marketing, and IT service. I thrive on learning, building, and leading, with a strong focus on practical innovation and real-world impact.
              </p>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Professional Experience
                </h4>
                <ul className="mt-4 space-y-4">
                  <li className="flex gap-x-3">
                    <div className="flex-none w-1.5 h-1.5 mt-2 rounded-full bg-blue-500" />
                    <p>Currently working at <span className="font-semibold text-gray-900 dark:text-white">Genex (Grameenphone Digital)</span>, handling live chat and email-based customer support, gaining hands-on experience in communication, customer service, and IT operations.</p>
                  </li>
                  <li className="flex gap-x-3">
                    <div className="flex-none w-1.5 h-1.5 mt-2 rounded-full bg-blue-500" />
                    <p>Founded <span className="font-semibold text-gray-900 dark:text-white">Mirro Tech</span>, where I led projects involving digital subscription products like Canva and Netflix, sharpening my skills in client handling, digital product delivery, and team coordination.</p>
                  </li>
                  <li className="flex gap-x-3">
                    <div className="flex-none w-1.5 h-1.5 mt-2 rounded-full bg-blue-500" />
                    <p>Worked as a brand promoter, collaborating with well-known names like <span className="font-semibold text-gray-900 dark:text-white">Samiha Air International</span>, <span className="font-semibold text-gray-900 dark:text-white">Dream Abroad</span>, and an SMM panel.</p>
                  </li>
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
      </div>
    </section>
  );
} 