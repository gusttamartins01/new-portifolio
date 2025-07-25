// src/data/servicesData.ts
import React from 'react';
import { Code, Database, Smartphone, Globe, Zap, Palette } from 'lucide-react';
import { Service } from '../types';

export const services: Service[] = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Desenvolvimento Frontend",
    description: "Criação de interfaces modernas e responsivas com React e tecnologias atuais"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Desenvolvimento Backend",
    description: "APIs robustas e escaláveis com Node.js e bancos de dados"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Design Responsivo",
    description: "Sites que funcionam perfeitamente em todos os dispositivos"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Aplicações Web",
    description: "Desenvolvimento de aplicações web completas e funcionais"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Otimização",
    description: "Melhoria de performance e experiência do usuário"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Design de interfaces intuitivas e atrativas"
  }
];