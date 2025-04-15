"use client";

import { useEffect, useState } from 'react';
import { Project, Skill, AboutData, ContactInfo } from './types';
import { FaCode, FaServer, FaMicrochip, FaMobile, FaPalette, FaChartLine } from "react-icons/fa";

// Default data

const defaultProjects: Project[] = [
  {
    id: 1,
    title: "CSV Search Tool",
    description: "A user-friendly tool for searching through CSV files with clean UI, efficient search logic, and smooth user interaction.",
    tags: ["React", "Node.js", "CSV Parsing", "UI/UX"],
    image: "/images/project1.jpg",
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    id: 2,
    title: "IoT Home Automation",
    description: "Smart home system built with ESP8266/ESP32 and Blynk platform for real-time monitoring and control of home appliances.",
    tags: ["Arduino", "ESP8266", "IoT", "Blynk"],
    image: "/images/project2.jpg",
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    id: 3,
    title: "Digital Subscription Platform",
    description: "Subscription management system for digital products like Canva and Netflix, including user management and payment processing.",
    tags: ["Web Development", "E-commerce", "Payment Gateway"],
    image: "/images/project3.jpg",
    github: "https://github.com/",
    demo: "https://example.com/",
  },
];

const defaultSkills: Skill[] = [
  {
    id: 1,
    category: "Web Development",
    icon: "FaCode",
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
    icon: "FaServer",
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
    icon: "FaMicrochip",
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
    icon: "FaPalette",
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
    icon: "FaChartLine",
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
    icon: "FaMobile",
    items: [
      "React Native", 
      "Cross-platform Development", 
      "Mobile UI Design"
    ]
  }
];

const defaultAbout: AboutData = {
  name: "MD SHIHAB HOSSAIN",
  title: "Electronics Engineer & Web Developer",
  tagline: "I'm a passionate engineer with expertise in embedded systems, web development, and digital marketing, creating solutions that deliver real-world impact.",
  bio: "I'm a passionate Electronics Engineer with a diverse background in embedded systems, web development, digital marketing, and IT service. I thrive on learning, building, and leading, with a strong focus on practical innovation and real-world impact.",
  image: "",
  carouselImages: [
    "https://source.unsplash.com/random/1200x800?tech",
    "https://source.unsplash.com/random/1200x800?coding",
    "https://source.unsplash.com/random/1200x800?electronics",
    "https://source.unsplash.com/random/1200x800?web",
    "https://source.unsplash.com/random/1200x800?engineering"
  ],
  experience: [
    {
      title: "Customer Support",
      company: "Genex (Grameenphone Digital)",
      description: "Handling live chat and email-based customer support, gaining hands-on experience in communication, customer service, and IT operations."
    },
    {
      title: "Founder",
      company: "Mirro Tech",
      description: "Led projects involving digital subscription products like Canva and Netflix, sharpening my skills in client handling, digital product delivery, and team coordination."
    },
    {
      title: "Brand Promoter",
      company: "Samiha Air International, Dream Abroad",
      description: "Collaborated with well-known brands to help them grow their digital identity and market reach."
    }
  ]
};

const defaultContactInfo: ContactInfo = {
  email: "shihabhossain596@gmail.com",
  phone: "+8801745368299",
  whatsapp: "+8801745368299",
  address: {
    present: "Nikunja 2, Khilkhet, Dhaka, Bangladesh",
    permanent: "Kichak, Shibganj, Bogura, Bangladesh"
  },
  socialLinks: {
    facebook: "https://web.facebook.com/mdshihabhossain0",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/"
  }
};

// Storage keys
const PROJECTS_KEY = 'portfolioProjects';
const SKILLS_KEY = 'portfolioSkills';
const ABOUT_KEY = 'portfolioAbout';
const CONTACT_KEY = 'portfolioContact';
const LAST_UPDATED_KEY = 'portfolioLastUpdated';

// Helper to get icon component from string
export const getIconComponent = (iconName: string) => {
  const icons: Record<string, React.ElementType> = {
    FaCode,
    FaServer,
    FaMicrochip,
    FaMobile, 
    FaPalette,
    FaChartLine
  };
  
  return icons[iconName] || FaCode;
};

// Get and update the last updated timestamp
export function useLastUpdated() {
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(LAST_UPDATED_KEY);
      if (saved) {
        setLastUpdated(saved);
      }
    }
  }, []);
  
  const updateTimestamp = () => {
    const timestamp = new Date().toISOString();
    setLastUpdated(timestamp);
    localStorage.setItem(LAST_UPDATED_KEY, timestamp);
    return timestamp;
  };
  
  return { lastUpdated, updateTimestamp };
}

// Storage hooks

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const { updateTimestamp } = useLastUpdated();
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedProjects = localStorage.getItem(PROJECTS_KEY);
      if (savedProjects) {
        setProjects(JSON.parse(savedProjects));
      } else {
        localStorage.setItem(PROJECTS_KEY, JSON.stringify(defaultProjects));
      }
    }
  }, []);
  
  const updateProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(newProjects));
    updateTimestamp();
  };
  
  return { projects, updateProjects };
}

export function useSkills() {
  const [skills, setSkills] = useState<Skill[]>(defaultSkills);
  const { updateTimestamp } = useLastUpdated();
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedSkills = localStorage.getItem(SKILLS_KEY);
      if (savedSkills) {
        setSkills(JSON.parse(savedSkills));
      } else {
        localStorage.setItem(SKILLS_KEY, JSON.stringify(defaultSkills));
      }
    }
  }, []);
  
  const updateSkills = (newSkills: Skill[]) => {
    setSkills(newSkills);
    localStorage.setItem(SKILLS_KEY, JSON.stringify(newSkills));
    updateTimestamp();
  };
  
  return { skills, updateSkills };
}

export function useAbout() {
  const [about, setAbout] = useState<AboutData>(defaultAbout);
  const { updateTimestamp } = useLastUpdated();
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedAbout = localStorage.getItem(ABOUT_KEY);
      if (savedAbout) {
        setAbout(JSON.parse(savedAbout));
      } else {
        localStorage.setItem(ABOUT_KEY, JSON.stringify(defaultAbout));
      }
    }
  }, []);
  
  const updateAbout = (newAbout: AboutData) => {
    setAbout(newAbout);
    localStorage.setItem(ABOUT_KEY, JSON.stringify(newAbout));
    updateTimestamp();
  };
  
  return { about, updateAbout };
}

export function useContactInfo() {
  const [contactInfo, setContactInfo] = useState<ContactInfo>(defaultContactInfo);
  const { updateTimestamp } = useLastUpdated();
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedContactInfo = localStorage.getItem(CONTACT_KEY);
      if (savedContactInfo) {
        setContactInfo(JSON.parse(savedContactInfo));
      } else {
        localStorage.setItem(CONTACT_KEY, JSON.stringify(defaultContactInfo));
      }
    }
  }, []);
  
  const updateContactInfo = (newContactInfo: ContactInfo) => {
    setContactInfo(newContactInfo);
    localStorage.setItem(CONTACT_KEY, JSON.stringify(newContactInfo));
    updateTimestamp();
  };
  
  return { contactInfo, updateContactInfo };
} 