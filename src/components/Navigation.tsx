import React from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
}) => {
  const navItems = [
    "inicio",
    "sobre",
    "projetos",
    "habilidades",
    "experiencia",
    "servicos",
    "contatos",
  ];

  const handleNavClick = (item: string) => {
    scrollToSection(item);
    setIsMenuOpen(false);
  };

  const getNavItemText = (item: string) => {
    if (item === "servicos") return "serviços";// Retorna o texto formatado
    return item; // Retorna o item para os outros casos (que já estão em minúsculo)
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-700/50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
            <button
    onClick={() => scrollToSection("inicio")}
    className="relative text-xl font-bold px-5 py-2 rounded-lg border border-transparent bg-clip-padding before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-cyan-400 before:to-blue-500 before:-z-10"
  >
    Gustavo Martins | Dev
  </button>


          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`capitalize text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white rounded ${
                  activeSection === item
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {getNavItemText(item)}
              </button>
            ))}
          </div>

          {/* Botão Mobile */}
          <button
            className="md:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-700/50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left px-3 py-3 text-sm text-gray-300 hover:text-white capitalize rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
              >
                {getNavItemText(item)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
