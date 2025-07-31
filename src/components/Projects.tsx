import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projectsData";

const Projects: React.FC = () => {
  return (
    <section
      id="projetos"
      className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Meus Projetos
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-600 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 sm:h-48 object-cover"
            />

            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-800 px-4 py-2 rounded-lg font-semibold hover:scale-110 transition-transform duration-300 border border-gray-500 text-white"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Demo</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-gray-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 text-white"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
            </div>

            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs sm:text-sm border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
