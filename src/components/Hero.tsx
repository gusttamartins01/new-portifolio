import React from 'react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('/assetes/desenvolvimento.jpg')", // Ajuste o caminho da imagem
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 animate-fade-in text-center lg:text-left">
            <div className="space-y-2">
              <p className="text-6xl sm:text-7xl text-gray-300">Olá, me chamo</p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Gustavo Martins
              </h1>
              <p className="text-3xl sm:text-4xl lg:text-5xl text-gray-300">
                Desenvolvedor Web
              </p>
            </div>
            <p className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0">
              Transformo ideias em experiências digitais incríveis. Especializado em desenvolvimento web moderno com foco em performance e usabilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('projetos')}
                className="bg-gradient-to-r from-gray-600 to-gray-800 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 border border-gray-500"
              >
                Ver Projetos
              </button>
              <button 
                onClick={() => scrollToSection('contatos')}
                className="border border-gray-500 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
              >
                Contato
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <img 
                src="/assetes/gus1.jpg" // Ajuste o caminho da imagem
                alt="Gustavo Martins" 
                className="relative w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full border-4 border-gray-600 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
