import React from "react";
import { Skill } from "../types";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiBootstrap,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
} from "react-icons/si";

export const skillsRow1: Skill[] = [
  {
    name: "HTML5",
    color: "text-orange-600",
    icon: <SiHtml5 className="w-12 h-12 mx-auto mb-3" />,
  },
  {
    name: "CSS3",
    color: "text-blue-600",
    icon: <SiCss3 className="w-12 h-12 mx-auto mb-3" />,
  },
  {
    name: "JavaScript",
    color: "text-yellow-400",
    icon: <SiJavascript className="w-12 h-12 mx-auto mb-3" />,
  },
  {
    name: "React",
    color: "text-cyan-400",
    icon: <SiReact className="w-12 h-12 mx-auto mb-3" />,
  },
  {
    name: "Node.js",
    color: "text-green-600",
    icon: <SiNodedotjs className="w-12 h-12 mx-auto mb-3" />,
  },
  {
    name: "TailwindCSS",
    color: "text-teal-400",
    icon: <SiTailwindcss className="w-12 h-12 mx-auto mb-3" />,
  },
];

export const skillsRow2: Skill[] = [
  {
    name: "TypeScript",
    color: "text-blue-600",
    icon: <SiTypescript className="w-12 h-12 mx-auto mb-3" />,
  },
  {
    name: "Bootstrap",
    color: "text-purple-700",
    icon: <SiBootstrap className="w-12 h-12 mx-auto mb-3" />,
  },
  

  
  {
    name: "MySQL",
    color: "text-blue-700",
    icon: <SiMysql className="w-12 h-12 mx-auto mb-3" />,
  },
  {
    name: "PostgreSQL",
    color: "text-blue-700",
    icon: <SiPostgresql className="w-12 h-12 mx-auto mb-3" />,
  },
  {
    name: "Git",
    color: "text-orange-600",
    icon: <SiGit className="w-12 h-12 mx-auto mb-3" />,
  },
  {
    name: "GitHub",
    color: "text-gray-400",
    icon: <SiGithub className="w-12 h-12 mx-auto mb-3" />,
  },
];

const skills: Skill[] = [...skillsRow1, ...skillsRow2];

export default skills;