"use client";

import { motion } from "framer-motion";
import { 
  FaCode, 
  FaServer, 
  FaMicrochip, 
  FaMobile, 
  FaPalette, 
  FaChartLine 
} from "react-icons/fa";

const skills = [
  {
    id: 1,
    category: "Web Development",
    icon: <FaCode className="h-6 w-6" />,
    items: [
      "HTML/CSS", 
      "JavaScript", 
      "React", 
      "Next.js", 
      "Node.js",
      "Full-stack Applications"
    ]
  },
  {
    id: 2,
    category: "Backend & Database",
    icon: <FaServer className="h-6 w-6" />,
    items: [
      "REST APIs", 
      "Database Design", 
      "Server Management", 
      "Cloud Services"
    ]
  },
  {
    id: 3,
    category: "Hardware & IoT",
    icon: <FaMicrochip className="h-6 w-6" />,
    items: [
      "Arduino", 
      "ESP8266/ESP32", 
      "Electronic Circuits", 
      "Embedded Systems",
      "Blynk Platform"
    ]
  },
  {
    id: 4,
    category: "UI/UX Design",
    icon: <FaPalette className="h-6 w-6" />,
    items: [
      "User Interface Design", 
      "User Experience", 
      "Responsive Design", 
      "Prototyping"
    ]
  },
  {
    id: 5,
    category: "Digital Marketing",
    icon: <FaChartLine className="h-6 w-6" />,
    items: [
      "Brand Promotion", 
      "Digital Strategy", 
      "Social Media Marketing", 
      "Content Creation"
    ]
  },
  {
    id: 6,
    category: "Mobile Development",
    icon: <FaMobile className="h-6 w-6" />,
    items: [
      "React Native", 
      "Cross-platform Development", 
      "Mobile UI Design"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            A diverse set of technical skills across hardware, software, and digital marketing
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="rounded-xl bg-white p-8 shadow-md ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">
                  {skill.category}
                </h3>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {skill.items.map((item) => (
                  <li key={item} className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 