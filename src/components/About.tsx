import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-20 sm:py-24 bg-gradient-to-r from-gray-900 to-black scroll-mt-20"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Imagem responsiva */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <img
              src="/assetes/gustta.jpg"
              alt="Gustavo Martins"
              className="w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border-2 border-gray-600 transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Texto ajustado para responsividade */}
          <div className="order-1 lg:order-2 px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Sobre Mim
              </h2>
              <div className="space-y-5 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                <p className="text-center sm:text-justify">
                  Sou um desenvolvedor web apaixonado por tecnologia e inovação. Com experiência em desenvolvimento web moderno,
                  tenho dedicado minhas habilidades em criar soluções digitais que fazem a diferença.
                </p>
                <p className="text-center sm:text-justify">
                  Minha jornada começou com curiosidade sobre como as coisas funcionam na web, e hoje trabalho com as mais
                  modernas tecnologias do mercado, sempre buscando aprender e evoluir constantemente.
                </p>
                <p className="text-center sm:text-justify">
                  Acredito que a tecnologia deve ser acessível e útil para todos. Por isso, foco em criar aplicações
                  intuitivas, performáticas e que realmente resolvem problemas reais das pessoas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;