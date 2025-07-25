import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { projects } from '../data/projectsData';
import { Project } from '../types'; // Importe a interface Project

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Meus Projetos
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-600"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs sm:text-sm border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-600 to-gray-800 px-4 sm:px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 border border-gray-500 text-sm"
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
                      className="flex items-center justify-center space-x-2 border border-gray-500 px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-600">
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-48 sm:h-64 object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Fechar detalhes do projeto"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-400 mb-6 text-sm sm:text-base">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 sm:px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs sm:text-sm border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                {selectedProject.demo && (
                  <a 
                    href={selectedProject.demo}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-600 to-gray-800 px-4 sm:px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 border border-gray-500"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Ver Demo</span>
                  </a>
                )}
                {selectedProject.github && (
                  <a 
                    href={selectedProject.github}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center space-x-2 border border-gray-500 px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;