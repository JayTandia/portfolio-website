import { Code2, Database, Layout, Smartphone, Terminal, Cpu, Globe, Rocket, Trophy, Briefcase, User } from 'lucide-react';

export const SOCIAL_LINKS = {
  github: "https://github.com/JayTandia",
  linkedin: "https://www.linkedin.com/in/jay-tandia",
  email: "mailto:jaytandia50@gmail.com",
  twitter: "https://x.com/JayTandia05"
};

export const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
];

export const SKILLS = [
  { category: "Languages", items: ["C++", "GoLang", "Java", "Python", "TypeScript", "JavaScript"] },
  { category: "Frontend", items: ["React", "Next.js", "TailwindCSS", "GSAP", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "FastAPI", "tRPC", "NATS JetStream"] },
  { category: "Database & Cloud", items: ["PostgreSQL", "MongoDB", "Firebase", "Docker", "AWS EC2"] },
  { category: "AI & Data", items: ["Gemini AI SDK", "OpenAI", "LangChain", "Grafana", "OpenSearch"] },
];

export const EXPERIENCE = [
  {
    company: "StyleAI Technologies",
    role: "Founding Member, Product Engineer",
    period: "Jan '25 - Present",
    type: "Entrepreneurship",
    description: "Designed and developed Drippit, a Gen Z fashion discovery app (Tinder for shopping). Built website and landing page within 1.5 months; app live with 4.7 rating.",
    skills: ["Product Design", "ReactJS", "NextJS", "NodeJS", "ExpressJS"]
  },
  {
    company: "TBO.com",
    role: "Software Developer Intern",
    period: "May '25 - July '25",
    type: "Internship",
    description: "Built scalable DORA Metrics system using GoLang & NATS JetStream. Reduced deployment failure rate by 5% and improved team performance by 8%.",
    skills: ["GoLang", "ELK Stack", "Grafana", "OpenSearch", "Docker"]
  },
  {
    company: "Rogan Pvt. Ltd.",
    role: "Founding Member, Product & Design",
    period: "Dec '21 - Dec '22",
    type: "Entrepreneurship",
    description: "Generated INR 120K revenue. Revamped UI driving 12% monthly booking growth. Secured funding from 4 incubators.",
    skills: ["Product Design", "Figma", "UI/UX", "Growth"]
  },
  {
    company: "StorNextDoor",
    role: "Product Design Intern",
    period: "Aug '23 - Dec '23",
    type: "Internship",
    description: "Increased sign-ups by 20% through targeted UX research. Achieved 22% monthly growth in active users.",
    skills: ["UX Research", "Product Design", "Prototyping", "Figma",]
  }
];

export const PROJECTS = [
  {
    title: "Regulatory Docs Search (RAG)",
    description: "RAG pipeline using OpenAI/Langchain for regulatory search. Deployed on AWS EC2 with FastAPI.",
    tech: ["Python", "LangChain", "AWS", "FastAPI"],
    icon: Database,
    color: "from-blue-500 to-cyan-500",
    size: "large",
    link: "https://github.com/JayTandia/mrm-gpt"
  },
  {
    title: "AI Trip Planner",
    description: "Smart planner using React, Firebase & Gemini API. Generates dynamic itineraries with budgets & hotels.",
    tech: ["Gemini API", "React", "Firebase"],
    icon: Globe,
    color: "from-emerald-500 to-green-500",
    size: "small",
    link: "https://ai-trip-planner-xi.vercel.app/"
  },
  {
    title: "AI Mock Interviewer",
    description: "Interview app with real-time AI feedback using Gemini API, Next.js, and Clerk auth.",
    tech: ["Next.js", "Gemini API", "PostgreSQL"],
    icon: User,
    color: "from-purple-500 to-pink-500",
    size: "small",
    link: "https://ai-mock-interviewer-six.vercel.app/"
  },
  {
    title: "C++ Chess Engine",
    description: "OOP based engine with Minimax AI, alpha-beta pruning, and advanced rules like castling.",
    tech: ["C++", "Algorithms", "Game Dev"],
    icon: Cpu,
    color: "from-orange-500 to-red-500",
    size: "large",
    link: "https://github.com/JayTandia/chess-oop-project"
  }
];

export const ACHIEVEMENTS = [
  {
    title: "National Finalist - Voyagehack 2.0",
    org: "TBO.com",
    desc: "Top 5 among 30,000 participants. Built a one-stop trip planner platform.",
    icon: Trophy
  },
  {
    title: "Runner-up - Finnovate Hack 2024",
    org: "IIT Gandhinagar",
    desc: "Top 50 students. Built a fintech prototype in 36 hours.",
    icon: Rocket
  }
];