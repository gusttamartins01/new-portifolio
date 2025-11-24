import React, { useState, useEffect } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../data/projectsData";

const Projects: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // autoplay
  useEffect(() => {
    const auto = setInterval(nextSlide, 4000);
    return () => clearInterval(auto);
  }, []);

  return (
    <section
      id="projetos"
      className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Projetos
      </h2>

      <div className="relative w-full overflow-hidden">

        {/* SLIDES */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-full px-2 sm:px-4"
            >
              <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-600">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 sm:h-96 object-cover"
                />

                {/* Hover overlay */}
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

                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs sm:text-sm border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CONTROLES */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 text-white p-2 rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 text-white p-2 rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* INDICADORES */}
        <div className="flex justify-center gap-2 mt-4">
          {projects.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                current === index
                  ? "bg-white scale-110"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
