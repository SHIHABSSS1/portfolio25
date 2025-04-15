"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual form handling logic
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Let's connect and discuss how we can work together on your next project
          </p>
        </motion.div>
        
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 dark:text-white">
                    Email
                  </h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    <a 
                      href="mailto:your.email@example.com" 
                      className="hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      your.email@example.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <FaPhoneAlt className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 dark:text-white">
                    Phone
                  </h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    <a 
                      href="tel:+1234567890" 
                      className="hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      +123 456 7890
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <FaMapMarkerAlt className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 dark:text-white">
                    Location
                  </h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Connect with me
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Looking for a dedicated developer to bring your ideas to life? I'm currently available for freelance work and exciting project collaborations.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm py-3 px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm py-3 px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Subject
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm py-3 px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm py-3 px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-3 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full transition-colors ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
              
              {submitSuccess && (
                <div className="rounded-md bg-green-50 dark:bg-green-900/30 p-4">
                  <div className="flex">
                    <div>
                      <p className="text-sm font-medium text-green-800 dark:text-green-300">
                        Thank you! Your message has been sent successfully.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 