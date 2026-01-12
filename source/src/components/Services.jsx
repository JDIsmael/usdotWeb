const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Desarrollo Web',
      description: 'Aplicaciones web modernas, rápidas y escalables utilizando las últimas tecnologías como React, Node.js, y cloud computing.',
      tags: ['React', 'Next.js', 'Node.js']
    },
    {
      icon: '📱',
      title: 'Desarrollo Mobile',
      description: 'Apps nativas y multiplataforma para iOS y Android que brindan experiencias excepcionales a tus usuarios.',
      tags: ['React Native', 'Flutter', 'Swift']
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      description: 'Infraestructura en la nube, CI/CD, y automatización para garantizar la máxima disponibilidad y rendimiento.',
      tags: ['AWS', 'Docker', 'Kubernetes']
    },
    {
      icon: '🤖',
      title: 'IA & Machine Learning',
      description: 'Integración de inteligencia artificial y modelos de ML para automatizar procesos y obtener insights valiosos.',
      tags: ['Python', 'TensorFlow', 'OpenAI']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Diseño de interfaces intuitivas y atractivas que mejoran la experiencia del usuario y aumentan las conversiones.',
      tags: ['Figma', 'Adobe XD', 'Sketch']
    },
    {
      icon: '🔧',
      title: 'Consultoría Tech',
      description: 'Asesoramiento estratégico para optimizar tu stack tecnológico y tomar decisiones informadas sobre tu arquitectura.',
      tags: ['Arquitectura', 'Estrategia', 'Auditoría']
    }
  ];

  return (
    <section id="servicios" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider uppercase">
            Nuestros Servicios
          </span>
          <h2 className="text-5xl font-bold mt-4 mb-6">¿En qué podemos ayudarte?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas completas para llevar tu negocio al siguiente nivel
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative bg-[#1e1e1e]/60 border border-primary/20 rounded-3xl p-10 backdrop-blur-sm card-hover overflow-hidden"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="bg-primary/15 text-primary px-4 py-1.5 rounded-full text-sm font-medium border border-primary/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
