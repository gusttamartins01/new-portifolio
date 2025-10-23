// src/types/index.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  demo?: string; // Opcional
  github?: string; // Opcional
}

export interface Skill {
  name: string;
  icon: JSX.Element; // ReactNode também é uma opção
  color: string;
}

export interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}
export interface Certificate {
  id: number;
  title: string;
  description: string;
  issuer: string; 
  date: string; 
  image: string; 
  link: string; 
}