// src/data/certificatesData.ts
import { Certificate } from '../types'; // Assumindo que o tipo está em '../types'

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Certificado Front-End Day",
    description: "Evento com 12 horas de duraçaõ, com bagame de Conhecimentos fundamentais e de alto nível de conceitos de Desenvolvimento Front-end, Back-end, e Full Stack. Saas, Mobile, Gamers, e Soft Skills",
    issuer: "Front-End CE",
    date: "Setembro de 2025",
    image: "/assetes/certificadoFrontEndDay.png", 
    link: "#", 
  },
  {
    id: 2,
    title: "Desenvolvimento Web",
    description: "Intensivão de JavaSCript com 4 aulas totalizando 8 horas, com aulasao vivo e projetos práticos.",
    issuer: "Hashtag Programação",
    date: "Outubro de 2025",
    image: "/assetes/certificadoJavaScript.png", 
    link: "#",
  },
  {
    id: 3,
    title: "Certificado Siará Tech",
    description: "Maior evento de Tecnologia do Norte e Nordeste, com diversos Stands, Programações, plaetras e Hackatons",
    issuer: "SIARÁ TECH - SEBRAE",
    date: "Outubro de  2025",
    image: "/assetes/certificadoSiaraTech.png",
    link: "#",
  },
  {
    id: 4,
    title: "Formação Full Stack Developer",
    description: "Introdução ao desenvolvimento Full Stack com front-end (HTML, CSS, JavaScript) e back-end (Node.js)",
    issuer: "DIO",
    date: "Setembro de 2025",
    image: "/assetes/certificadoFullStack.png",
    link: "#",
  },
  {
    id: 5,
    title: "Formação Básica em programação com Python Express",
    description: "Nas aulas forma desenvolvido sistemas de automação, analise de dados com PowerBI, e lógica de programação, utilizando Bibliotecs e Frameworks como Pandas, FastAPI, PyAUtoGui e Flask",
    issuer: "Simplifica Treinamentos",
    date: "Janeiro de 2025",
    image: "/assetes/certificadoPython.png",
    link: "#",
  },
];