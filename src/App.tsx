import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { useScrollSpy } from "./hooks/useScrollSpy";
import Experience from "./components/Experiences";
import { Github, Linkedin, Instagram } from "lucide-react";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const activeSection = useScrollSpy([
    "inicio",
    "sobre",
    "projetos",
    "habilidades",
    "experiencia",
    "servicos",
    "contatos",
  ]);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <Hero scrollToSection={scrollToSection} />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Services />
      <Contact />

      <footer className="bg-black/90 text-gray-400 py-6 text-center border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} Gustavo Martins. Todos os direitos
            reservados.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/gusttamartins01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/gustavo-martins-197b70298"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/gustta_gus"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
