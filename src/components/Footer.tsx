"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFacebook } from "react-icons/fa";
import { useContactInfo, useAbout } from "@/utils/storage";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { contactInfo } = useContactInfo();
  const { about } = useAbout();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href={contactInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <span className="sr-only">Facebook</span>
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href={contactInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-6 w-6" />
          </a>
          <a href={contactInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a href={contactInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <span className="sr-only">Twitter</span>
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-white">
            <span className="sr-only">Email</span>
            <FaEnvelope className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-gray-400">
            &copy; {currentYear} {about.name}. All rights reserved.
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
            <p className="text-center text-xs leading-5 text-gray-400 mt-1">
              <Link href="/admin" className="hover:underline">Admin</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 