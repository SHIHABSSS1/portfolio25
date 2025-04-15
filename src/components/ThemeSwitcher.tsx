"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(true);  // Default to dark mode
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted to avoid hydration issues
    setMounted(true);
    
    // Force dark mode by default (this is important)
    document.documentElement.classList.add("dark");
    
    // Check for theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    
    // Only switch to light if explicitly set
    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // Ensure dark mode is set
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Don't render anything during server-side rendering or first mount
  // to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none transition-colors"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <FaSun size={20} className="text-yellow-400" /> : <FaMoon size={20} className="text-blue-500" />}
    </button>
  );
} 