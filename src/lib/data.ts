import type { Experience, Education, Skill, Project, NavItem } from '$lib/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills' },
];

export const experiences: Experience[] = [
  {
    id: 'ut-researcher',
    role: 'Undergraduate Researcher',
    company: 'UT Austin — Department of History',
    location: 'Austin, TX',
    period: 'Sep 2024 – Dec 2024',
    type: 'work',
    bullets: [
      'Designed knowledge graph structures to model historical relationships across archival sources.',
      'Built interactive media prototypes using Unity to present research findings.',
      'Applied ontology modeling and information architecture principles to humanities datasets.',
    ],
  },
  {
    id: 'taiping',
    role: 'Business & Risk Analysis Intern',
    company: 'China Taiping Insurance Holdings',
    location: 'Shanghai, China',
    period: 'Jun 2023',
    type: 'work',
    bullets: [
      'Analyzed business risk data and produced structured reports for senior analysts.',
      'Supported cross-departmental data workflows using Excel and internal systems.',
    ],
  },
  {
    id: 'standard-chartered',
    role: 'Project Assistant, Data & Operations',
    company: 'Standard Chartered Bank',
    location: 'Shanghai, China',
    period: 'Sep 2019 – Nov 2019',
    type: 'work',
    bullets: [
      'Assisted in operational data management and project coordination tasks.',
      'Prepared documentation and tracked deliverables across multiple teams.',
    ],
  },
  {
    id: 'dream-corps',
    role: 'Finance Minister',
    company: 'Dream Corps — UT Austin Chapter',
    location: 'Austin, TX',
    period: 'Jan 2023 – Dec 2023',
    type: 'leadership',
    bullets: [
      'Secured $2,000+ in organizational sponsorships through outreach and proposals.',
      'Managed chapter budget and financial reporting throughout the academic year.',
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'M.A.',
    school: 'University of Chicago',
    department: 'Department of Humanities',
    period: 'Sep 2025 – Jun 2026',
  },
  {
    degree: 'B.A. — Mathematics & History',
    school: 'University of Texas at Austin',
    detail: 'Cum Laude',
    period: 'Graduated May 2025',
  },
];

export const skills: Skill[] = [
  { name: 'Python', category: 'language', level: 85 },
  { name: 'RStudio', category: 'language', level: 70 },
  { name: 'SQLite', category: 'database', level: 78 },
  { name: 'Neo4j', category: 'database', level: 72 },
  { name: 'Ontology Modeling', category: 'knowledge', level: 80 },
  { name: 'Knowledge Graph Design', category: 'knowledge', level: 82 },
  { name: 'Information Architecture', category: 'knowledge', level: 78 },
  { name: 'Excel', category: 'tool', level: 88 },
  { name: 'Unity', category: 'tool', level: 60 },
];

export const projects: Project[] = [
  {
    id: 'twin-adventure',
    title: 'Twin Adventure',
    description:
      'An interactive adventure game built in Unity exploring dual-narrative mechanics and player-driven story branching.',
    tags: ['Unity', 'C#', 'Game Design', 'Interactive Media'],
    github: 'https://github.com/luoqunwang/Twin-Adventure',
  },
  {
    id: 'met-museum',
    title: 'Met Museum Webpage',
    description:
      'A data-driven web interface surfacing Metropolitan Museum collection data, built to explore knowledge organization and visual presentation.',
    tags: ['HTML', 'CSS', 'JavaScript', 'API', 'Information Design'],
    github: 'https://github.com/luoqunwang/Met-Museum-Webpage',
  },
];

export const personal = {
  name: 'Luoqun Wang',
  title: 'Knowledge Systems & Data Developer',
  email: 'luoqun@uchicago.edu',
  github: 'https://github.com/luoqunwang',
  linkedin: 'https://www.linkedin.com/in/luoqunwanga5',
  location: 'Chicago, IL',
  bio: 'Graduate student at the University of Chicago bridging humanities and data systems — building knowledge graphs, interactive media, and structured tools that make complex information navigable.',
};