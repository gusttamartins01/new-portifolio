import React from 'react';
import { Code, Database, Smartphone, Globe, Zap, Palette } from 'lucide-react';
import { Service } from '../types';

const iconBaseClass =
  "w-14 h-14 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110";

export const services: Service[] = [
  {
    icon: <Code className={`${iconBaseClass} text-cyan-500`} />,
    title: "Desenvolvimento Frontend",
    description: "Criação de interfaces modernas e responsivas com React e tecnologias atuais"
  },
  {
    icon: <Database className={`${iconBaseClass} text-red-500`} />,
    title: "Desenvolvimento Backend",
    description: "APIs robustas e escaláveis com Node.js e bancos de dados"
  },
  {
    icon: <Smartphone className={`${iconBaseClass} text-green-500`} />,
    title: "Design Responsivo",
    description: "Sites que funcionam perfeitamente em todos os dispositivos"
  },
  {
    icon: <Globe className={`${iconBaseClass} text-blue-500`} />,
    title: "Aplicações Web",
    description: "Desenvolvimento de aplicações web completas e funcionais"
  },
  {
    icon: <Zap className={`${iconBaseClass} text-yellow-500`} />,
    title: "Otimização",
    description: "Melhoria de performance e experiência do usuário"
  },
  {
    icon: <Palette className={`${iconBaseClass} text-pink-500`} />,
    title: "UI/UX Design",
    description: "Design de interfaces intuitivas e atrativas"
  }
];
