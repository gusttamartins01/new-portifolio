// src/components/Certificates.tsx

import React from "react";
import { certificates } from "../data/certificatesData"; 

const Certificates: React.FC = () => {
  return (
    <section
      id="certificados" 
      className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Certificados
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-600 transition-transform duration-300 hover:scale-105 flex flex-col"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-40 sm:h-48 object-cover object-top"
            />
            <div className="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            </div>
            <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 text-white">
                  {cert.title}
                </h3>
                <p className="text-gray-400 mb-3 text-sm italic">
                  {cert.issuer} - {cert.date}
                </p>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  {cert.description}
                </p>
              </div>
              <div className="mt-auto pt-2 border-t border-gray-700">
                  <span className="flex items-center text-sm text-blue-400 font-medium">
                      Certificado Concluído
                  </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;