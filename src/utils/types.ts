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
  image: string; // Base64 or URL
  carouselImages: string[]; // Array of image URLs or base64 strings
  experience: {
    title: string;
    company: string;
    description: string;
  }[];
};

export type ContactInfo = {
  email: string;
  phone: string;
  whatsapp: string;
  address: {
    present: string;
    permanent: string;
  };
  socialLinks: {
    facebook: string;
    github: string;
    linkedin: string;
    twitter: string;
  };
}; 