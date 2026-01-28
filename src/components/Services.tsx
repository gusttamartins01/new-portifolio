import React from 'react';
import { services } from '../data/servicesData';
import { Service } from '../types';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-gradient-to-r from-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Serviços
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: Service, index: number) => (
            <div
              key={`${service.title}-${index}`}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-400 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
