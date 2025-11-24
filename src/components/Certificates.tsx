import React, { useState, useEffect } from "react";
import { certificates } from "../data/certificatesData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Certificates: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % certificates.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  useEffect(() => {
    const auto = setInterval(next, 4000);
    return () => clearInterval(auto);
  }, []);

  return (
    <section
      id="certificados"
      className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Certificados
      </h2>

      <div className="relative w-full overflow-hidden">

        {/* CARROSSEL */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {certificates.map((cert) => (
            <div key={cert.id} className="min-w-full px-4">
              <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-600 transition-transform hover:scale-[1.02]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-60 object-cover object-top"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-white">
                    {cert.title}
                  </h3>

                  <p className="text-gray-400 text-sm italic mb-2">
                    {cert.issuer} – {cert.date}
                  </p>

                  <p className="text-gray-300 text-base mb-4">
                    {cert.description}
                  </p>

                  <div className="pt-3 border-t border-gray-700">
                    <span className="text-blue-400 font-medium">
                      Certificado Concluído
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CONTROLES */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 text-white p-2 rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={next}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 text-white p-2 rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* INDICADORES */}
        <div className="flex justify-center gap-2 mt-4">
          {certificates.map((_, index) => (
            <button
              onClick={() => setCurrent(index)}
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index ? "bg-white scale-110" : "bg-gray-500 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
