import React from 'react';
import skills from '../data/skillsData';
import { Skill } from '../types';

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="py-24 bg-gray-900 text-white scroll-mt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Minhas Habilidades
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
          {skills.map((skill: Skill) => (
            <div
              key={skill.name}
              className="text-center bg-gray-800 rounded-2xl p-4 shadow-lg hover:bg-gray-700 transition transform hover:-translate-y-1 hover:scale-105"
            >
              <div className={`${skill.color} flex justify-center items-center`}>
                <div className="transition-transform transform hover:scale-110">
                  {React.cloneElement(skill.icon as React.ReactElement, {
                    className: 'w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3',
                  })}
                </div>
              </div>
              <p className="mt-2 text-base sm:text-lg font-medium">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}