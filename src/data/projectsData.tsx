// src/data/projectsData.ts
import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com React e Node.js",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    demo: "#", // Substitua por um link real
    github: "https://github.com/gusttamartins01/fruit-catcher-game" // Substitua por um link real
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com interface moderna",
    tech: ["React", "TypeScript", "Tailwind"],
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    demo: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Dashboard meteorológico com dados em tempo real",
    tech: ["JavaScript", "API", "CSS3"],
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    demo: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Social Media App",
    description: "Rede social com chat em tempo real",
    tech: ["React", "Socket.io", "Express"],
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    demo: "#",
    github: "#"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Site portfólio responsivo e moderno",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    demo: "#",
    github: "#"
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "Plataforma de blog com CMS personalizado",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    image: "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800",
    demo: "#",
    github: "#"
  }
];