import React from 'react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section
      id="inicio"
      className="pt-24 min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Fundo Visual */}
      <div
        className="absolute inset-0 opacity-10 sm:opacity-5"
        style={{
          backgroundImage: "url('/assetes/desenvolvimento.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />

      {/* Conteúdo Principal */}
      <div className="max-w-screen-xl mx-auto relative z-10 w-full py-10 sm:py-16 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-24">
          {/* Imagem maior e centralizada */}
          <div className="lg:order-2 flex justify-center px-4 lg:px-12 shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full blur-xl opacity-20 animate-pulse" />
              <img
                src="/assetes/gus1.jpg"
                alt="Gustavo Martins"
                className="relative w-64 sm:w-72 md:w-80 lg:w-96 h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-full border-4 border-gray-600 shadow-2xl hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>

          {/* Texto principal com fontes maiores */}
          <div className="flex-1 space-y-6 text-center lg:text-left max-w-md sm:max-w-lg md:max-w-xl mx-auto lg:mx-0">
            <div className="space-y-2">
              <p className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-300 leading-snug">
                Olá, me chamo
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
                Gustavo Martins
              </h1>
              <p className="text-3xl sm:text-4xl md:text-5xl text-gray-300 font-semibold">
                Desenvolvedor Web
              </p>
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 leading-relaxed">
              Transformo ideias em experiências digitais incríveis. Especializado em desenvolvimento
              web moderno com foco em performance e usabilidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projetos')}
                className="w-full sm:w-auto bg-gradient-to-r from-gray-600 to-gray-800 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 border border-gray-500"
              >
                Ver Projetos
              </button>
              <button
                onClick={() => scrollToSection('contatos')}
                className="w-full sm:w-auto border border-gray-500 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
              >
                Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;