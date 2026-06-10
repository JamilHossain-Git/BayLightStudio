export interface Project {
  id: string;
  name: string;
  year: string;
  image: string;
  category: string;
  tagline: string;
  client?: string;
  duration?: string;
  services?: string[];
  challenge?: string;
  solution?: string;
  results?: string[];
  gallery?: string[];
  techStack?: string[];
  liveUrl?: string;
  detailedOverview?: string;
}

export interface Service {
  id: string;
  num: string;
  title: string;
  description: string;
  categories: string[];
}

export interface Testimonial {
  id: string;
  rating: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  initials: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  readTime: string;
  category: string;
}
