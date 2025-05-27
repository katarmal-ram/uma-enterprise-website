
interface TechnologySectionProps {
  data: {
    enabled: boolean;
    title: string;
    subtitle: string;
    technologies: Array<{
      name: string;
      description: string;
      icon: string;
      category: string;
      features?: string[];
    }>;
  };
}

export const TechnologySection = ({ data }: TechnologySectionProps) => {
  if (!data.enabled) return null;

  const categories = [...new Set(data.technologies.map(tech => tech.category))];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.technologies
                .filter(tech => tech.category === category)
                .map((tech, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{tech.icon}</span>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {tech.name}
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {tech.description}
                  </p>
                  {tech.features && (
                    <div className="space-y-1">
                      {tech.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
