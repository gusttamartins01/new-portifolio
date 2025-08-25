import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiN8N,
  SiSupabase,
  SiMongodb,

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
    name: 'Node.js',
    color: 'text-green-500',
    icon: <SiNodedotjs />,
  },
  {
    name: 'React',
    color: 'text-cyan-300',
    icon: <SiReact />,
  },
  {
    name: 'TypeScript',
    color: 'text-blue-500',
    icon: <SiTypescript />,
  },
  {
    name: 'TailwindCSS',
    color: 'text-teal-400',
    icon: <SiTailwindcss />,
  },
  {
    name: 'Bootstrap',
    color: 'text-purple-700',
    icon: <SiBootstrap />,
  },
 
];

export const skillsRow2: Skill[] = [

  {
  name: 'Python',
  color: 'text-[#3776AB]',
  icon: <SiPython />,
  },
  {
    name: 'N8N',
    color: 'text-red-600',
    icon: <SiN8N />,
  },
  {
    name: 'Supabase',
    color: 'text-[#38c389]',
    icon: <SiSupabase />,
  },
  {
    name: 'MongoDB',
    color: 'text-green-700',
    icon: <SiMongodb />,
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

];

const skills: Skill[] = [...skillsRow1, ...skillsRow2];

export default skills;