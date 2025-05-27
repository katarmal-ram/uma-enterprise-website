
interface WhyChooseUsSectionProps {
  data: {
    enabled: boolean;
    title: string;
    subtitle: string;
    points: Array<{
      title: string;
      description: string;
      image: string;
    }>;
  };
}

export const WhyChooseUsSection = ({ data }: WhyChooseUsSectionProps) => {
  if (!data.enabled) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {data.points.map((point, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 overflow-hidden rounded-lg">
                <img 
                  src={point.image} 
                  alt={point.title}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
