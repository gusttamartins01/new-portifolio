import React from "react";
import { Briefcase, GraduationCap, Laptop } from "lucide-react";

const experiences = [
  {
    cargo: "Desenvolvedor Web & Mobile - Fullstack",
    empresa: "Freelancer",
    periodo: "2025 - Atual",
    descricao:
      "Desenvolvimento de soluções digitais completas, abrangendo aplicações web, sistemas corporativos e aplicativos mobile. Atuação no front-end com React, Tailwind e frameworks modernos, no back-end com Node.js e bancos de dados, além de integração de APIs e foco em performance, escalabilidade e UX/UI.",
    icon: Briefcase,
  },
  {
    cargo: "Estudante ADS",
    empresa: "Unifametro",
    periodo: "2022 - Atual",
    descricao:
      "Graduação em Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento de sistemas, sites e apps e banco de dados.",
    icon: GraduationCap,
  },
  {
    cargo: "Projetos Pessoais",
    empresa: "GitHub",
    periodo: "2022 - Atual",
    descricao:
      "Criação de portfólios, sistemas web e mobile e experimentos com inteligência artificial.",
    icon: Laptop,
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experiencia"
      className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 border-t border-gray-700/50"
    >
      {/* Título */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Experiência
        </h2>
        <p className="mt-4 text-gray-400 max-w-4xl mx-auto md:text-5X1">
          Um pouco da minha trajetória acadêmica e profissional.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <div
              key={index}
              className="group relative bg-gray-800/60 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
            >
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

              {/* Glow ao passar o mouse */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
