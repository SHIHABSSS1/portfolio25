export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
};

export type Skill = {
  id: number;
  category: string;
  icon: string; // Icon identifier
  items: string[];
};

export type AboutData = {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  image: string;
  experience: number;
  location: string;
  nationality: string;
  education: string;
  languages: string;
  interests: string[];
};

export type ContactInfo = {
  email: string;
  phone: string;
  location: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    facebook: string;
  };
}; 