export interface NavItem {
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'work' | 'leadership';
  bullets: string[];
}

export interface Education {
  degree: string;
  school: string;
  department?: string;
  detail?: string;
  period: string;
}

export interface Skill {
  name: string;
  category: 'language' | 'database' | 'knowledge' | 'tool';
  level: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
}