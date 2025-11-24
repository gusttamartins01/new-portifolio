import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Briefcase, GraduationCap, Laptop, Workflow } from "lucide-react";

const experiences = [
  {
    cargo: "Desenvolvedor Fullstack",
    empresa: "Projetos para Clientes (Freelancer)",
    periodo: "2025",
    descricao:
      "Desenvolvimento de sites institucionais, sistemas corporativos sob demanda para clientes. Experiência em front-end com React, Tailwind e animações modernas, além de back-end com Node.js, e bancos de dados relacionais e não relacionais. Também realizei integrações de APIs e implementei práticas de otimização de performance, escalabilidade e foco em UX/UI.",
    icon: Briefcase,
  },
  {
    cargo: "Projetos Pessoais e Open Source",
    empresa: "GitHub",
    periodo: "2025",
    descricao:
      "Criação de portfólios interativos, catálogos digitais, sistemas web responsivos e experimentos com inteligência artificial. Exploro novas tecnologias em JavaScript, React, Bootstrap, Tailwind, Node.js e integração com APIs, além de publicar projetos no GitHub.",
    icon: Laptop,
  },
  {
    cargo: "Desenvolvedor de sistemas e fluxos de automatização",
    empresa: " Projetos para Clientes (Freelancer)",
    periodo: "2025",
    descricao:
      "Desenvolvimento de fluxos de automação utilizando n8n, integrando sistemas de e-mail, formulários e bancos de dados. Criação de um agente de IA capaz de interpretar demandas recebidas por e-mail e responder automaticamente, aumentando a eficiência e reduzindo tempo de atendimento.",
    icon: Workflow,
  },
  {
    cargo: "Desenvolvedor Fullstack ",
    empresa: "Projetos para Clientes (Freelancer)",
    periodo: "2025",
    descricao:
      "Desenvolvimento de um sistema Web & Mobile voltado para autoajuda dos usuários, incluindo funcionalidades de diário pessoal, organização de músicas favoritas, catálogo de filmes e séries, registro de livros lidos e frases motivacionais diárias. Atuei em todas as etapas do projeto, desde o design da interface (UI/UX) até a implementação do back-end, garantindo integração fluida, responsividade e experiência de uso intuitiva.",
    icon: Briefcase,
  },
  {
    cargo: "Instrutor de Curso - Introdução ao Desenvolvimento Web",
    empresa: "Projeto Educacional / Workshops",
    periodo: "2025",
    descricao:
      "Ministrei aulas introdutórias de desenvolvimento web com foco em HTML, CSS e JavaScript, abordando desde as principais tags e estruturação de páginas até estilização e interatividade com scripts. Preparei materiais didáticos, exercícios práticos e exemplos aplicados para auxiliar iniciantes a criarem suas primeiras páginas web, incentivando boas práticas e lógica de programação básica.",
    icon: GraduationCap,
  },
  {
    cargo: "Desenvolvedor Fullstack",
    empresa: "Projetos para Clientes (Freelancer)",
    periodo: "2025",
    descricao:
      "Desenvolvimento de um sistema Web & Mobile para gestão de barbearia, com funcionalidades de agendamento de clientes, controle de serviços e funcionários, painel administrativo e banco de dados para armazenamento seguro. O projeto inclui ainda um chatbot automatizado para atendimento e confirmação de horários. Atuei em todas as etapas, desde o design da interface (UI/UX) até a implementação do back-end, garantindo responsividade, integração eficiente e uma experiência prática tanto para clientes quanto para gestores.",
    icon: Briefcase,
  },
];

const Experience: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % experiences.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  // autoplay
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="experiencia"
      className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 border-t border-gray-700/50"
    >
      {/* Título */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Experiências
        </h2>
        <p className="mt-4 text-gray-400 max-w-4xl mx-auto md:text-5X1">
          Um pouco da minha trajetória profissional.
        </p>
      </div>

      {/* Carrossel */}
      <div className="relative w-full overflow-hidden max-w-5xl mx-auto">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {experiences.map((exp, index) => {
            const Icon = exp.icon;

            return (
              <div key={index} className="min-w-full px-4">
                <div className="group relative bg-gray-800/60 backdrop-blur-md border border-gray-700/50 rounded-2xl p-12 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-indigo-600/80 rounded-xl group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{exp.cargo}</h3>
                  </div>

                  <p className="text-gray-400 text-sm mb-2">
                    {exp.empresa} • {exp.periodo}
                  </p>
                  <p className="text-gray-300">{exp.descricao}</p>

                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Botões */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 p-2 rounded-full text-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={next}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 p-2 rounded-full text-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-6">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index
                  ? "bg-white scale-110"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
