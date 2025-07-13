import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Globe,
  Database,
  Zap
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com React e Node.js",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      demo: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com interface moderna",
      tech: ["React", "TypeScript", "Tailwind"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      demo: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Dashboard meteorológico com dados em tempo real",
      tech: ["JavaScript", "API", "CSS3"],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      demo: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Social Media App",
      description: "Rede social com chat em tempo real",
      tech: ["React", "Socket.io", "Express"],
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      demo: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Site portfólio responsivo e moderno",
      tech: ["React", "Tailwind", "Framer Motion"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      demo: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "Plataforma de blog com CMS personalizado",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
      image: "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800",
      demo: "#",
      github: "#"
    }
  ];

  const skills = [
    {
      name: "HTML",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
        </svg>
      ),
      color: "text-orange-500"
    },
    {
      name: "CSS",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
        </svg>
      ),
      color: "text-blue-500"
    },
    {
      name: "JavaScript",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      ),
      color: "text-yellow-500"
    },
    {
      name: "React",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
        </svg>
      ),
      color: "text-cyan-400"
    },
    {
      name: "Node.js",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
        </svg>
      ),
      color: "text-green-500"
    },
    {
      name: "Tailwind",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
      ),
      color: "text-teal-400"
    },
    {
      name: "TypeScript",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
        </svg>
      ),
      color: "text-blue-600"
    }
  ];

  const services = [
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre', 'projetos', 'habilidades', 'servicos', 'contatos'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              GM
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['inicio', 'sobre', 'projetos', 'habilidades', 'servicos', 'contatos'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-white ${
                    activeSection === item ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {item === 'servicos' ? 'serviços' : item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['inicio', 'sobre', 'projetos', 'habilidades', 'servicos', 'contatos'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-gray-300 hover:text-white capitalize w-full text-left transition-colors duration-300"
                >
                  {item === 'servicos' ? 'serviços' : item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 animate-fade-in text-center lg:text-left">
              <div className="space-y-2">
                <p className="text-lg sm:text-xl text-gray-300">Olá, me chamo</p>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Gustavo Martins
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300">
                  Desenvolvedor Web
                </p>
              </div>
              <p className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0">
                Transformo ideias em experiências digitais incríveis. Especializado em desenvolvimento web moderno com foco em performance e usabilidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('projetos')}
                  className="bg-gradient-to-r from-gray-600 to-gray-800 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 border border-gray-500"
                >
                  Ver Projetos
                </button>
                <button 
                  onClick={() => scrollToSection('contatos')}
                  className="border border-gray-500 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
                >
                  Contato
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <img 
                  src="/desenhoeu.jpg" 
                  alt="Gustavo Martins" 
                  className="relative w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full border-4 border-gray-600 shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 sm:py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <img 
                src="/" 
                alt="Gustavo Martins" 
                className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 border-2 border-gray-600"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Sobre Mim
              </h2>
              <div className="space-y-4 text-gray-300 text-sm sm:text-base">
                <p>
                  Sou um desenvolvedor fullstack apaixonado por tecnologia e inovação. Com experiência em desenvolvimento web moderno, 
                  tenho dedicado minha carreira a criar soluções digitais que fazem a diferença.
                </p>
                <p>
                  Minha jornada começou com curiosidade sobre como as coisas funcionam na web, e hoje trabalho com as mais 
                  modernas tecnologias do mercado, sempre buscando aprender e evoluir constantemente.
                </p>
                <p>
                  Acredito que a tecnologia deve ser acessível e útil para todos. Por isso, foco em criar aplicações 
                  intuitivas, performáticas e que realmente resolvem problemas reais das pessoas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Meus Projetos
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-600"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs sm:text-sm border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-600">
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-48 sm:h-64 object-cover"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-gray-400 mb-6 text-sm sm:text-base">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs sm:text-sm border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={selectedProject.demo}
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-600 to-gray-800 px-4 sm:px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 border border-gray-500"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Ver Demo</span>
                  </a>
                  <a 
                    href={selectedProject.github}
                    className="flex items-center justify-center space-x-2 border border-gray-500 px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-16 sm:py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Habilidades
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
            {skills.map((skill) => (
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

      {/* Services Section */}
      <section id="servicos" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Serviços
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-xl border border-gray-600 hover:scale-105 hover:border-gray-400 transition-all duration-300"
              >
                <div className="text-gray-300 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contatos" className="py-16 sm:py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Contatos
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-xl border border-gray-600">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Nome</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Mensagem</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent text-white placeholder-gray-400 resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-600 to-gray-800 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 border border-gray-500"
                >
                  Enviar Mensagem
                </button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="text-center mb-6">
                  <p className="text-gray-400 mb-2">Entre em contato diretamente:</p>
                  <a 
                    href="mailto:gustavo@exemplo.com" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    gustavo@exemplo.com
                  </a>
                </div>
                
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-400 transition-colors transform hover:scale-110"
                  >
                    <Instagram className="w-8 h-8" />
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                  >
                    <Github className="w-8 h-8" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                  >
                    <Linkedin className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2024 Gustavo Martins. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;