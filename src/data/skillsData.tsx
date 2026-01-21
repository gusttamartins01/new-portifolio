import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiGit,
  SiGithub,
  SiN8N,
  SiNextdotjs,

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
    color: 'text-yellow-500',
    icon: <SiJavascript />,
  },
  {
    name: 'TypeScript',
    color: 'text-blue-700',
    icon: <SiTypescript />,
  },
   {
    name: 'React',
    color: 'text-cyan-500',
    icon: <SiReact />,
  },
  {
    name: 'Node.js',
    color: 'text-green-500',
    icon: <SiNodedotjs />,
  },
];

export const skillsRow2: Skill[] = [

   {
    name: 'Next.js',
    color: 'text-black',
    icon: <SiNextdotjs/>,
  },
  {
    name: 'TailwindCSS',
    color: 'text-teal-400',
    icon: <SiTailwindcss />,
  },
  {
    name: 'N8N',
    color: 'text-red-600',
    icon: <SiN8N />,
  },
  {
    name: 'MySQL',
    color: 'text-blue-600',
    icon: <SiMysql />,
  },
  {
    name: 'Git',
    color: 'text-orange-700',
    icon: <SiGit />,
  },
  {
    name: 'GitHub',
    color: 'text-white-800',
    icon: <SiGithub />,
  },

];

const skills: Skill[] = [...skillsRow1, ...skillsRow2];

export default skills;