import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiN8N,
} from 'react-icons/si';
import { Skill } from '../types';

export const skillsRow1: Skill[] = [
  {
    name: 'HTML5',
    color: 'text-orange-600',
    icon: <SiHtml5 />,
  },
  {
    name: 'CSS3',
    color: 'text-blue-600',
    icon: <SiCss3 />,
  },
  {
    name: 'JavaScript',
    color: 'text-yellow-400',
    icon: <SiJavascript />,
  },
  {
    name: 'React',
    color: 'text-cyan-400',
    icon: <SiReact />,
  },
  {
    name: 'Node.js',
    color: 'text-green-600',
    icon: <SiNodedotjs />,
  },
  {
    name: 'TailwindCSS',
    color: 'text-teal-400',
    icon: <SiTailwindcss />,
  },
];

export const skillsRow2: Skill[] = [
  {
    name: 'TypeScript',
    color: 'text-blue-600',
    icon: <SiTypescript />,
  },
  {
  name: 'Python',
  color: 'text-[#3776AB]',
  icon: <SiPython />,
},


  {
    name: 'MySQL',
    color: 'text-blue-700',
    icon: <SiMysql />,
  },
  {
    name: 'PostgreSQL',
    color: 'text-blue-700',
    icon: <SiPostgresql />,
  },
  {
    name: 'Git',
    color: 'text-orange-600',
    icon: <SiGit />,
  },
  {
    name: 'GitHub',
    color: 'text-gray-400',
    icon: <SiGithub />,
  },
  {
    name: 'N8N',
    color: 'text-red-400',
    icon: <SiN8N />,
  },
];

const skills: Skill[] = [...skillsRow1, ...skillsRow2];

export default skills;