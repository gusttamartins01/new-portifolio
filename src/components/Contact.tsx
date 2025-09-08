import React, { useState } from 'react';
import { Github, Linkedin, Instagram, MessageCircle} from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      time: new Date().toLocaleString('pt-BR') // Isso permite que o {{time}} seja usado no template
    };

    emailjs.send('service_2sm85bc', 'template_3z2lxbc', dataToSend, 'zAC58VMl6cUvfeaCr')
      .then(() => {
        alert('A sua mensagem foi enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => {
        console.error('Erro ao enviar:', error);
        alert('Ocorreu um erro. Tente novamente.');
      });
  };

  return (
    <section id="contatos" className="py-16 sm:py-20 bg-gradient-to-r from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Contatos
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-xl border border-gray-600">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent text-white placeholder-gray-400 resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-500 to-gray-800 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 border border-gray-500"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            <a href="https://github.com/gusttamartins01" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white-400 hover:text-white transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/gustavo-martins-197b70298/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-blue-400 hover:text-white transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://instagram.com/gustta_gus" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-red-400 hover:text-white transition-colors">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="https://wa.me/5585998568223?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os."   
            target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-green-400 hover:text-white transition-colors">
              <MessageCircle className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;