// src/data/projectsData.ts
import { Project } from '../types';

export const projects: Project[] = [

 {
    id: 1,
    title: "Em desenvolvimento: App BMQ",
    description: "Sistema web mobile voltado para autoajuda, seu amigo de bolso",
    tech: ["React", "TypeScript", "Tailwind","Node.js","Postgres", "Python", "React Native", "N8N"],
    image: "/assetes/bmqlogo.png",
    demo:  "https://bem-me-quer-green.vercel.app/",
    github: "https://github.com/gusttamartins01/bem-me-quer-palpavel"
  },
  {
    id: 2,
    title: "Jogo interativo para coletar frutas",
    description: "Jogo interativo no qual tem que coletar o máximo de frutas possíveis sem deixar cair",
    tech: ["HTML5", "CSS3", "JavaScript",],
    image: "/assetes/jogodefrutas.jpg",
    demo: "https://fruit-catcher-game-eta.vercel.app/", // Substitua por um link real
    github: "https://github.com/gusttamartins01/fruit-catcher-game.git" // Substitua por um link real
  },
  {
    id: 3,
    title: "Sistema web para uma academia e cadastro de clientes",
    description: "Sistema para realizar cadastros de clientes, feedbacks de melhorias e implementações, e apresentação de uma academia voltado a resultados com visão computacional",
    tech: ["React", "TypeScript", "Tailwind","Node.js","SupaBase"],
    image: "/assetes/acad.png",
    demo: "https://revo-fit.com/",
    github: "https://github.com/gusttamartins01/Revo-Projeto.git"
  },
  {
    id: 4,
    title: "Tela de autenticação de rede WI-FI",
    description: "Tela para autenticar wi-fi de launos, professores e funcionários da Instuição",
    tech: ["HTML5", "CSS3", "Autenticação com banco de dados"],
    image: "/assetes/autentication.png",
    demo:  "https://tela-de-autenticao.vercel.app/",
    github: "https://github.com/gusttamartins01/Tela-de-autenticao"
  },
    {
    id: 5,
    title:"Sistema de E-Commerce",
    description:"Sistema de e-commerce para uma loja de vendas de joias e artigos de luxo e grife",
    tech:["TypeScript","React-vite","Tailwind","Node.Js","PostgresSQL"],
    image:"/assetes/ecommerce.png",
    demo:"https://project-ecomerce-one.vercel.app/",
    github:"https://github.com/gusttamartins01/project-ecomerce",

  },
  {
    id: 6,
    title: "Dashboard de Rotina",
    description: "Tela para autenticar wi-fi de launos, professores e funcionários da Instuição",
    tech: ["Python","HTML5", "CSS3", "Autenticação com banco de dados Mockado "],
    image: "/assetes/dashboard.png",
    demo:  "",
    github: "https://github.com/gusttamartins01/dashboard-rotinas-python"
  },
  {
    id: 7,
    title: "projeto de automação com n8n",
    description: "Workflows de automação com agente de ia para responder e-mails",
    tech: ["n8n","JavaScript","PostgresSQL", "Autenticação com banco de dados"],
    image: "/assetes/n8n.png",
    demo:  "",
    github: ""
  },
   {
    id: 8,
    title: "Projeto de automação de respostas de e-mail com Python",
    description: "Classificando e-mails e automatizando respostas com agente de IA",
    tech: ["Python","JavaScript","JSON", "HTML", "CSS"],
    image:"assetes/emailsClassifer.png",
    demo:  "https://emails-classifier.vercel.app/",
    github: "https://github.com/gusttamartins01/emails-classifier-backend"
  },
   {
    id: 9,
    title: "Sistema Universitario",
    description: "Página web para vizualizar atividades atrasadas e enviar mensagem automaticas pelo whatsapp notificando ás entregas pendetes e atrasos.",
    tech: ["HTML", "CSS", "JavaScript","Node","API do Whatsapp"],
    image: "/assetes/appAcademico.png",
    demo:  "https://academico-app-8ohl.vercel.app/#",
    github: "https://github.com/gusttamartins01/academico-app"
  },
  {
    id: 10,
    title: "Project Players and Transactions",
    description: "Sistema para mensurar número de jogadores e transições e resilatdos do ticked médio de valores.",
    tech: ["TypeScrip", "Node", "React", "Python", "Docker", "MySQL", "API"],
    image: "/assetes/playerCore.png",
    demo:  "https://playercore-frontend.vercel.app/",
    github: "https://github.com/gusttamartins01/playercore-backend"
  },
   {
    id: 11,
    title: "Project UniConnect",
    description: "Sistema para comunidade academica de alunso e profssores universitarios",
    tech: ["TypeScrip", "Node", "React-Vite", "Tailwind"],
    image: "/assetes/uniconnect.png",
    demo:  "https://learn-connect-hub-93.vercel.app/",
    github: "https://github.com/gusttamartins01/connect-hub"
  },
  
];