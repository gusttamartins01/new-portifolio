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
  SiFigma,

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
    color: 'text-blue-500',
    icon: <SiTypescript />,
  },
  {
    name: 'Node.js',
    color: 'text-green-500',
    icon: <SiNodedotjs />,
  },
  {
    name: 'React',
    color: 'text-cyan-400',
    icon: <SiReact />,
  },

];

export const skillsRow2: Skill[] = [

  {
    name: 'TailwindCSS',
    color: 'text-teal-500',
    icon: <SiTailwindcss />,
  },
  {
    name: 'Figma',
    color: 'text-pink-500',
    icon: <SiFigma/>,
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
    color: 'text-orange-600',
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