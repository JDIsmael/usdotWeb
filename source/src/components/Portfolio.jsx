import dashboardImg from '../img/dashboard.png'; // ajusta la ruta si tu archivo no está en src/components
import appMovilImg from '../img/app-movil.png'; // ajusta la ruta si tu archivo no está en src/components

const Portfolio = () => {
  const projects = [
    {
      title: 'App de Gestión de Lecturas en Campo',
      description:
        'Aplicación móvil offline-first para registro y seguimiento de mediciones, con sincronización automática al backend y generación de reportes.',
      image: appMovilImg,
      icon: (
        <svg className="w-20 h-20 text-primary opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      tags: ['Flutter', 'Java', 'PostgreSQL', 'Microservicios'],
      sector: '🏢 Sector Público',
      year: '📅 2025'
    },
    {
      title: 'App Fitness multiplataforma',
      description:
        'App móvil con seguimiento de entrenamientos, planes personalizados y gamificación para mejorar adherencia y progreso.',
      icon: (
        <svg className="w-20 h-20 text-primary opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      tags: ['React Native', 'Firebase', 'IA', 'Stripe'],
      sector: '💪 Sector Health',
      year: '📅 2024'
    },
    {
      title: 'E-commerce optimizado para conversión',
      description:
        'Tienda online con checkout optimizado, recomendaciones y analítica para mejorar la conversión y el rendimiento.',
      icon: (
        <svg className="w-20 h-20 text-primary opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      tags: ['Next.js', 'Shopify', 'Vercel', 'Analytics'],
      sector: '🛍️ Sector E-commerce',
      year: '📅 2023'
    },
    {
      title: 'Dashboard de KPIs en tiempo real',
      description:
        'Centralizamos métricas clave en un dashboard con visualizaciones y reportes automatizados para monitoreo y decisiones rápidas.',
      image: dashboardImg, // 👈 AQUÍ VA TU IMAGEN
      icon: (
        <svg className="w-20 h-20 text-primary opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      tags: ['Vue.js', 'Python', 'Java', 'Node Js'],
      sector: '📊 Sector Público',
      year: '📅 2025'
    },
    {
      title: 'Sistema Integral de Gestión Académica',
      description:
        'Plataforma web para la administración de docentes, estudiantes y control de calificaciones con cálculo automático de promedios. Implementado con arquitectura Spring Boot + Angular e integración de Redis como servidor de caché para optimizar tiempos de respuesta y rendimiento.',
      tags: ['Angular', 'Spring Boot', 'Redis', 'Java'],
      sector: '🎓 Sector Educativo',
      year: '📅 2023'
    }
  ];

  return (
    <section id="portafolio" className="py-32 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider uppercase">Nuestro Trabajo</span>
          <h2 className="text-5xl font-bold mt-4 mb-6">Proyectos Destacados</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Casos de éxito que demuestran nuestra capacidad para crear soluciones innovadoras
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-[#1e1e1e]/60 border border-primary/20 rounded-3xl p-10 backdrop-blur-sm card-hover overflow-hidden"
            >
              <div className="relative w-full h-64 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 overflow-hidden">
                {/* shimmer */}
                <div
                  className="absolute inset-0 shimmer-animation pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(45deg, transparent 30%, rgba(115, 185, 76, 0.10) 50%, transparent 70%)',
                    width: '200%',
                    height: '200%'
                  }}
                />

                {/* 👇 si hay imagen, se muestra; si no, icon */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Vista de ${project.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  project.icon
                )}
              </div>

              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-primary/15 text-primary px-4 py-1.5 rounded-full text-sm font-medium border border-primary/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center text-sm text-gray-500">
                <span>{project.sector}</span>
                <span className="mx-2">•</span>
                <span>{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
