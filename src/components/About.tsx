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
          <div className="flex justify-center lg:justify-end order-2 lg:order-10">
            <img
              src="/assetes/gusms.jpg"
              alt="Gustavo Martins"
              className="w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border-2 border-gray-700 transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Texto ajustado para responsividade */}
          <div className="order-1 lg:order-2 px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Perfil
              </h2>
              <div className="space-y-5 text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
                <p className="text-center sm:text-justify">
                  Sou desenvolvedor fullstack e estudante de Análise e Desenvolvimento de Sistemas. Tenho interesse em criar aplicações web modernas, funcionais e bem estruturadas, sempre buscando unir design, performance e boa experiência do usuário.
                </p>
                <p className="text-center sm:text-justify">
                  Atuo no desenvolvimento de interfaces e na integração com back-end, utilizando tecnologias como JavaScript, TypeScript, React e Next.js. Valorizo código limpo, organização e boas práticas no desenvolvimento de software.
                </p>
                <p className="text-center sm:text-justify">
                  Estou em constante evolução, aprendendo por meio de projetos práticos e desafios reais. Acredito que a tecnologia deve ser acessível e eficiente, resolvendo problemas de forma simples e gerando valor tanto para usuários quanto para empresas
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