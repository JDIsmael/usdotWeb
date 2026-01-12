const TechStack = () => {
  const technologies = [
    { icon: '⚛️', name: 'React' },
    { icon: '📱', name: 'React Native' },
    { icon: '🔺', name: 'Next.js' },
    { icon: '🟢', name: 'Node.js' },
    { icon: '🐍', name: 'Python' },
    { icon: '☁️', name: 'AWS' },
    { icon: '🐳', name: 'Docker' },
    { icon: '🗄️', name: 'PostgreSQL' },
    { icon: '🔥', name: 'Firebase' },
    { icon: '💨', name: 'Tailwind' },
    { icon: '📊', name: 'GraphQL' },
    { icon: '🤖', name: 'OpenAI' }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider uppercase">
            Tecnologías
          </span>
          <h2 className="text-5xl font-bold mt-4 mb-6">Stack Tecnológico</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trabajamos con las tecnologías más avanzadas y demandadas del mercado
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-[#1a1a1a] border border-primary/20 hover:border-primary transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
            >
              <div className="text-4xl mb-3">{tech.icon}</div>
              <span className="text-sm font-semibold">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
