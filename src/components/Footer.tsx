"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <span className="sr-only">Twitter</span>
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white">
            <span className="sr-only">Email</span>
            <FaEnvelope className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-gray-400">
            &copy; {currentYear} MD SHIHAB HOSSAIN. All rights reserved.
          </p>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="/#about" className="text-sm text-gray-400 hover:text-white">
              About
            </Link>
            <Link href="/#projects" className="text-sm text-gray-400 hover:text-white">
              Projects
            </Link>
            <Link href="/#skills" className="text-sm text-gray-400 hover:text-white">
              Skills
            </Link>
            <Link href="/#contact" className="text-sm text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>
          <div className="mt-4 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-400">
              Built with Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 