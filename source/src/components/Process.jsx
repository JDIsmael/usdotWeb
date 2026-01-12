const Process = () => {
  const steps = [
    {
      number: 1,
      title: 'Descubrimiento & Análisis',
      description: 'Nos sumergimos en tu negocio para entender tus objetivos, desafíos y oportunidades. Realizamos investigación de mercado, análisis de competencia y definimos los requisitos del proyecto.'
    },
    {
      number: 2,
      title: 'Diseño & Planificación',
      description: 'Creamos wireframes, prototipos interactivos y definimos la arquitectura técnica. Establecemos hitos claros y un roadmap detallado del proyecto.'
    },
    {
      number: 3,
      title: 'Desarrollo Ágil',
      description: 'Implementamos la solución usando metodologías ágiles con sprints de 2 semanas. Mantenemos comunicación constante y te mostramos avances regularmente.'
    },
    {
      number: 4,
      title: 'Testing & QA',
      description: 'Realizamos pruebas exhaustivas de funcionalidad, rendimiento y seguridad. Garantizamos que todo funcione perfectamente antes del lanzamiento.'
    },
    {
      number: 5,
      title: 'Lanzamiento & Soporte',
      description: 'Desplegamos tu solución y monitoreamos su rendimiento. Ofrecemos soporte continuo, mantenimiento y actualizaciones para asegurar el éxito a largo plazo.'
    }
  ];

  return (
    <section id="proceso" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider uppercase">
            Nuestro Proceso
          </span>
          <h2 className="text-5xl font-bold mt-4 mb-6">Cómo Trabajamos</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Un proceso probado que garantiza resultados excepcionales en cada proyecto
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-16">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div 
                  className="absolute left-5 top-12 w-0.5 h-full bg-gradient-to-b from-primary to-transparent"
                />
              )}
              
              {/* Step Number */}
              <div className="absolute left-0 top-0 w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>

              {/* Step Content */}
              <div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
