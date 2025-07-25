import React from 'react';
import { skills } from '../data/skillsData';
import { Skill } from '../types'; // Importe a interface Skill

const Skills: React.FC = () => {
  return (
    <section id="habilidades" className="py-16 sm:py-20 bg-gradient-to-r from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Habilidades
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
          {skills.map((skill: Skill) => (
            <div 
              key={skill.name}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-xl text-center border border-gray-600 hover:scale-105 hover:border-gray-400 transition-all duration-300 group"
            >
              <div className={`${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h3 className="font-semibold text-sm sm:text-lg text-gray-200">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;