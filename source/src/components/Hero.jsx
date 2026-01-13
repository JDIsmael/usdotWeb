const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 w-[200%] h-[200%] gradient-animation">
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at 20% 50%, rgba(115, 185, 76, 0.15) 0%, transparent 50%),
                       radial-gradient(circle at 80% 80%, rgba(75, 155, 46, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      {/* Floating Hexagons */}
      <div className="hexagon absolute top-[10%] left-[10%] w-10 h-12 bg-primary/20 float-animation" style={{ animationDelay: '0s' }} />
      <div className="hexagon absolute top-[20%] right-[15%] w-10 h-12 bg-primary/20 float-animation" style={{ animationDelay: '1s' }} />
      <div className="hexagon absolute bottom-[20%] left-[20%] w-10 h-12 bg-primary/20 float-animation" style={{ animationDelay: '2s' }} />
      <div className="hexagon absolute bottom-[30%] right-[10%] w-10 h-12 bg-primary/20 float-animation" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="reveal mb-6">
            <span className="font-mono text-primary text-sm tracking-wider uppercase">
              Desarrollo de Software Innovador
            </span>
          </div>

          {/* Main Title */}
          <h1 className="reveal reveal-delay-1 text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transformamos Ideas<br />en{' '}
            <span className="gradient-text">
              Soluciones Digitales
            </span>
          </h1>

          {/* Description */}
          <p className="reveal reveal-delay-2 text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Somos USDOT, tu socio estratégico en desarrollo de software y consultoría tecnológica.
            Creamos productos digitales excepcionales que impulsan el crecimiento de tu negocio.
          </p>

          {/* CTA Buttons */}
          <div className="reveal reveal-delay-3 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contacto')}
              className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark text-white px-10 py-4 rounded-xl font-semibold transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40 btn-shine"
            >
              Iniciar Proyecto
            </button>
            <button
              onClick={() => scrollToSection('portafolio')}
              className="bg-transparent text-primary px-10 py-4 rounded-xl font-semibold border-2 border-primary transition-all hover:bg-primary/10 hover:-translate-y-1"
            >
              Ver Portafolio
            </button>
          </div>

          {/* Stats */}
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 reveal reveal-delay-4">
            <div>
              <div className="text-5xl font-extrabold gradient-text">&lt; 24h</div>
              <p className="text-gray-400 mt-2">Tiempo de respuesta</p>
            </div>
            <div>
              <div className="text-5xl font-extrabold gradient-text">MVP</div>
              <p className="text-gray-400 mt-2">en 4–6 semanas</p>
            </div>
            <div>
              <div className="text-5xl font-extrabold gradient-text">E2E</div>
              <p className="text-gray-400 mt-2">De idea a producción</p>
            </div>
            <div>
              <div className="text-5xl font-extrabold gradient-text">IA</div>
              <p className="text-gray-400 mt-2">Automatización inteligente</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
