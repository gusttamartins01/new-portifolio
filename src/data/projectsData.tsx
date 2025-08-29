// src/data/projectsData.ts
import { Project } from '../types';

export const projects: Project[] = [

 {
    id: 3,
    title: "Em desenvolvimento: App BMQ",
    description: "Sistema web mobile voltado para autoajuda, seu amigo de bolso",
    tech: ["React", "TypeScript", "Tailwind","Node.js","Postgres", "Python", "React Native", "N8N"],
    image: "/assetes/bmqlogo.png",
    demo:  "https://bem-me-quer-green.vercel.app/",
    github: "https://github.com/gusttamartins01/bem-me-quer-palpavel"
  },
  {
    id: 1,
    title: "Jogo interativo para coletar frutas",
    description: "Jogo interativo no qual tem que coletar o máximo de frutas possíveis sem deixar cair",
    tech: ["HTML5", "CSS3", "JavaScript",],
    image: "/assetes/jogodefrutas.jpg",
    demo: "https://fruit-catcher-game-eta.vercel.app/", // Substitua por um link real
    github: "https://github.com/gusttamartins01/fruit-catcher-game.git" // Substitua por um link real
  },
  {
    id: 2,
    title: "Sistema web para uma academia e cadastro de clientes",
    description: "Sistema para realizar cadastros de clientes, feedbacks de melhorias e implementações, e apresentação de uma academia voltado a resultados com visão computacional",
    tech: ["React", "TypeScript", "Tailwind","Node.js","SupaBase"],
    image: "/assetes/acad.png",
    demo: "https://revo-fit.com/",
    github: "https://github.com/gusttamartins01/Revo-Projeto.git"
  },
  {
    id: 3,
    title: "Chatbot institucional",
    description: "Chatboty com IA para auxiliar nas demndas e suporte ao atendimento dos alunos da instutuição de ensino",
    tech: ["HTML5", "CSS3","JavaScript","API","Node.js", "Inteligência Artificial"],
    image: "/assetes/Chatbot.jpg",
    demo:  "https://chatbot-teste-pearl.vercel.app/",
    github: "https://github.com/gusttamartins01/chatbot-teste.git"
  },

   {
    id: 3,
    title: "Landing Page Software House",
    description: "Landing Page da Software House Robo Dev",
    tech: ["React", "TypeScript", "Tailwind","Node.js","Postgres"],
    image: "/assetes/robodev.jpg",
    demo:  "https://portf-lio-robodev.vercel.app/",
    github: "https://github.com/gusttamartins01/portf-lio-robodev"
  },
  {
    id: 3,
    title: "Tela de autenticação de rede WI-FI",
    description: "Tela para autenticar wi-fi de launos, professores e funcionários da Instuição",
    tech: ["HTML5", "CSS3", "Autenticação com banco de dados"],
    image: "/assetes/autentication.png",
    demo:  "https://tela-de-autenticao.vercel.app/",
    github: "https://github.com/gusttamartins01/Tela-de-autenticao"
  },
    {
    id: 3,
    title:"Sistema de E-Commerce",
    description:"Sistema de e-commerce para uma loja de vendas de joias e artigos de luxo e grife",
    tech:["TypeScript","React-vite","Tailwind","Node.Js","PostgresSQL"],
    image:"/assetes/ecommerce.png",
    demo:"https://project-ecomerce-one.vercel.app/",
    github:"https://github.com/gusttamartins01/project-ecomerce",

  },
  {
    id: 3,
    title: "Dashboard de Rotina",
    description: "Tela para autenticar wi-fi de launos, professores e funcionários da Instuição",
    tech: ["Python","HTML5", "CSS3", "Autenticação com banco de dados Mockado "],
    image: "/assetes/dashboard.png",
    demo:  "https://tela-de-autenticao.vercel.app/",
    github: "https://github.com/gusttamartins01/dashboard-rotinas-python"
  },
  {
    id: 3,
    title: "projeto de automação com n8n",
    description: "Workflows de automação com agente de ia para responder e-mails",
    tech: ["n8n","JavaScript","PostgresSQL", "Autenticação com banco de dados"],
    image: "/assetes/n8n.png",
    demo:  "",
    github: ""
  },
  
];