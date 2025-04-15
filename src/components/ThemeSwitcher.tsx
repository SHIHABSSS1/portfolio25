"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);

  // Check if we're in dark mode
  const isDarkMode = () => {
    if (typeof document === 'undefined') return true;
    return document.documentElement.classList.contains('dark');
  };
  
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Mark as mounted
    setMounted(true);
    
    // Ensure dark mode is applied by default 
    document.documentElement.classList.add('dark');
    
    // Update state to match actual DOM
    setDarkMode(isDarkMode());
    
    console.log('ThemeSwitcher mounted, dark mode:', isDarkMode());
  }, []);

  const toggleTheme = () => {
    console.log('Toggle theme clicked, current dark mode:', isDarkMode());
    
    // Simple direct DOM manipulation
    if (isDarkMode()) {
      console.log('Switching to light mode');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      console.log('Switching to dark mode');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
    
    // Force a re-render by updating state
    setTimeout(() => {
      setDarkMode(isDarkMode());
      console.log('After toggle, dark mode:', isDarkMode());
    }, 50);
  };

  // Hydration protection
  if (!mounted) return null;

  // Let's show a different color based on theme for debugging
  const buttonColor = isDarkMode() ? 'bg-yellow-500' : 'bg-blue-600';

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle-btn p-3 rounded-lg ${buttonColor} text-white font-bold hover:bg-opacity-80 focus:outline-none transition-colors`}
      style={{ 
        cursor: 'pointer',
        minWidth: '40px',
        minHeight: '40px',
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
      }}
    >
      {isDarkMode() ? 
        <FaSun size={24} style={{ color: '#FFFFFF' }} /> : 
        <FaMoon size={24} style={{ color: '#FFFFFF' }} />
      }
    </button>
  );
} 