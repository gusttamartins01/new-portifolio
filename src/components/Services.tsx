import React from 'react';
import { services } from '../data/servicesData';
import { Service } from '../types'; // Importe a interface Service

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Serviços
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service: Service, index: number) => (
            <div 
              key={`${service.title}-${index}`} 
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-xl border border-gray-600 hover:scale-105 hover:border-gray-400 transition-all duration-300"
            >
              <div className="text-gray-300 mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;