const Contact = () => {
  return (
    <section id="contacto" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Floating Hexagons */}
      <div className="hexagon absolute top-[10%] left-[5%] w-10 h-12 bg-primary/20 float-animation" style={{ animationDelay: '0s' }} />
      <div className="hexagon absolute bottom-[20%] right-[10%] w-10 h-12 bg-primary/20 float-animation" style={{ animationDelay: '1.5s' }} />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          ¿Listo para empezar<br/>tu próximo proyecto?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Cuéntanos tu idea y te ayudaremos a convertirla en realidad. 
          Agenda una consulta gratuita con nuestro equipo.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a 
            href="mailto:contacto-comercial@usdot.tech"
            className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark text-white px-10 py-4 rounded-xl font-semibold transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40 btn-shine inline-flex items-center gap-2"
          >
            <span>📧</span> Enviar Email
          </a>
          <a 
            href="https://wa.me/+593959545998"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-primary px-10 py-4 rounded-xl font-semibold border-2 border-primary transition-all hover:bg-primary/10 hover:-translate-y-1 inline-flex items-center gap-2"
          >
            <span>💬</span> WhatsApp
          </a>
        </div>
        
        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="p-6 rounded-xl bg-[#1a1a1a]/50 border border-primary/10">
            <div className="text-3xl mb-3">📧</div>
            <h4 className="font-semibold mb-2">Email</h4>
            <p className="text-gray-400 text-sm">contacto@usdot.com</p>
          </div>
          <div className="p-6 rounded-xl bg-[#1a1a1a]/50 border border-primary/10">
            <div className="text-3xl mb-3">📱</div>
            <h4 className="font-semibold mb-2">Teléfono</h4>
            <p className="text-gray-400 text-sm">+1 (234) 567-8900</p>
          </div>
          <div className="p-6 rounded-xl bg-[#1a1a1a]/50 border border-primary/10">
            <div className="text-3xl mb-3">📍</div>
            <h4 className="font-semibold mb-2">Ubicación</h4>
            <p className="text-gray-400 text-sm">Remote First</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
