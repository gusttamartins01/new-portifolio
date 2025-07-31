// src/data/projectsData.ts
import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Jogo interativo de coleta de frutas",
    description: "Jogo interativo no qual tem coletar o máximo de frutas possíveis sem deixar cair",
    tech: ["HTML5", "CSS3", "JavaScript",],
    image: "/assetes/jogodefrutas.jpg",
    demo: "https://fruit-catcher-game-eta.vercel.app/", // Substitua por um link real
    github: "https://github.com/gusttamartins01/fruit-catcher-game.git" // Substitua por um link real
  },
  {
    id: 2,
    title: "Sistema web para uma academia e para cadastro de clientes",
    description: "Sistema que para cadastro de clientes, e feedbacks de melhorias e implementações, e apresentação de uma academia voltado a resultados com visão computacional",
    tech: ["React", "TypeScript", "Tailwind","SupaBase"],
    image: "/assetes/acad.png",
    demo: "https://revo-fit.com/",
    github: "https://github.com/gusttamartins01/Revo-Projeto.git"
  },
  {
    id: 3,
    title: "Chatbot institucional",
    description: "Chatboty com IA para uxiliar nas demndas e suporte ao atendimento dos alunos da instutuição",
    tech: ["HTML5", "CSS3","JavaScript","API","Node.JS", "Inteligência Artificial"],
    image: "/assetes/Chatbot.jpg",
    demo:  "https://chatbot-teste-pearl.vercel.app/",
    github: "https://github.com/gusttamartins01/chatbot-teste.git"
  },
  
];