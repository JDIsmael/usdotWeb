const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-primary/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div 
                className="hexagon bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center"
                style={{ width: '40px', height: '46px' }}
              >
                <span className="text-white font-bold text-sm mt-1.5">U</span>
              </div>
              <span className="text-xl font-bold">USDOT</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transformando ideas en soluciones digitales innovadoras desde 2019.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => scrollToSection('servicios')} className="hover:text-primary transition-colors">
                  Desarrollo Web
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicios')} className="hover:text-primary transition-colors">
                  Desarrollo Mobile
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicios')} className="hover:text-primary transition-colors">
                  Cloud & DevOps
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicios')} className="hover:text-primary transition-colors">
                  Consultoría
                </button>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Compañía</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Equipo</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors text-2xl">🔗</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors text-2xl">🐦</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors text-2xl">📷</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors text-2xl">💼</a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 USDOT. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Términos</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
