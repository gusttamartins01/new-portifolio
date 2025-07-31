import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 sm:py-20 bg-gradient-to-r from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <img 
              src="\public\assetes\gus.jpg" // Ajuste o caminho da imagem
              alt="Gustavo Martins" 
              className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 border-2 border-gray-600"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base">
              <p>
                Sou um desenvolvedor web apaixonado por tecnologia e inovação. Com experiência em desenvolvimento web moderno, 
                tenho dedicado minhas habilidades em criar soluções digitais que fazem a diferença.
              </p>
              <p>
                Minha jornada começou com curiosidade sobre como as coisas funcionam na web, e hoje trabalho com as mais 
                modernas tecnologias do mercado, sempre buscando aprender e evoluir constantemente.
              </p>
              <p>
                Acredito que a tecnologia deve ser acessível e útil para todos. Por isso, foco em criar aplicações 
                intuitivas, performáticas e que realmente resolvem problemas reais das pessoas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
