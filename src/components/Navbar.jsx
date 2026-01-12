import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-primary/10 shadow-2xl' 
            : 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-primary/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div 
                className="hexagon bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center"
                style={{ width: '50px', height: '57.5px' }}
              >
                <span className="text-white font-bold text-xl mt-2">U</span>
              </div>
              <span className="text-2xl font-bold">USDOT</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('portafolio')}
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Portafolio
              </button>
              <button 
                onClick={() => scrollToSection('proceso')}
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Proceso
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all hover:-translate-y-0.5"
              >
                Contactar
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[80px] left-0 right-0 h-[calc(100vh-80px)] bg-[#0a0a0a]/98 backdrop-blur-xl z-40 px-6 py-10 mobile-menu-enter md:hidden">
          <div className="flex flex-col space-y-6">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-xl text-gray-300 hover:text-primary transition-colors text-left"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('portafolio')}
              className="text-xl text-gray-300 hover:text-primary transition-colors text-left"
            >
              Portafolio
            </button>
            <button 
              onClick={() => scrollToSection('proceso')}
              className="text-xl text-gray-300 hover:text-primary transition-colors text-left"
            >
              Proceso
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-xl font-semibold text-center mt-4"
            >
              Contactar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
