"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLastUpdated } from '@/utils/storage';
import { FaTimes, FaCalendarAlt, FaClock, FaGithub, FaCode } from 'react-icons/fa';

export default function LastUpdateModal() {
  const { lastUpdated } = useLastUpdated();
  const [isVisible, setIsVisible] = useState(false);
  const [gitInfo, setGitInfo] = useState({
    lastCommit: 'Unknown',
    commitMessage: 'No commit message available',
    commitAuthor: 'Unknown',
    commitDate: lastUpdated || new Date().toISOString()
  });
  
  // Format date for display
  const formatDate = (isoString: string | null) => {
    if (!isoString) return { date: 'Never updated', time: '' };
    
    const date = new Date(isoString);
    return {
      date: date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
      }),
      time: date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };
  };
  
  const formattedUpdate = formatDate(gitInfo.commitDate);
  
  // Keyboard shortcut handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Shift+A
      if (e.shiftKey && e.key === 'A') {
        setIsVisible(true);
      }
      
      // Close on Escape
      if (e.key === 'Escape') {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Simulated git info - in a real app, this would come from an API call to your backend
  useEffect(() => {
    // Simulate fetching git info from a server
    // In a real implementation, you would call an API endpoint
    // that runs a shell command like `git log -1 --pretty=format:"%h|%s|%an|%ad"`
    
    // For now we'll use the lastUpdated timestamp as the commit date
    const simulatedGitInfo = {
      lastCommit: 'f77dfcd', // Last commit hash
      commitMessage: 'Add photo carousel feature to About section with admin controls',
      commitAuthor: 'MD SHIHAB HOSSAIN',
      commitDate: lastUpdated || new Date().toISOString()
    };
    
    setGitInfo(simulatedGitInfo);
  }, [lastUpdated]);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={() => setIsVisible(false)}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                <FaGithub className="mr-2" /> Last Code Push
              </h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <FaTimes size={20} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center text-gray-800 dark:text-gray-200 mb-2">
                  <FaCode className="text-blue-600 dark:text-blue-400 mr-2" />
                  <span className="font-mono text-sm bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">
                    {gitInfo.lastCommit}
                  </span>
                </div>
                <p className="text-gray-800 dark:text-gray-200 font-medium">
                  {gitInfo.commitMessage}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  By {gitInfo.commitAuthor}
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-blue-600 dark:text-blue-400" />
                <span className="text-gray-800 dark:text-gray-200">{formattedUpdate.date}</span>
              </div>
              
              {formattedUpdate.time && (
                <div className="flex items-center gap-3">
                  <FaClock className="text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-800 dark:text-gray-200">{formattedUpdate.time}</span>
                </div>
              )}
              
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Press <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md">Shift</kbd> + <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md">A</kbd> anytime to see when the code was last updated.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 