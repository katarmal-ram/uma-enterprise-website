
interface CertificationsSectionProps {
  data: {
    enabled: boolean;
    title: string;
    items: Array<{
      name: string;
      description: string;
      image: string;
    }>;
  };
}

export const CertificationsSection = ({ data }: CertificationsSectionProps) => {
  if (!data.enabled) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {data.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.items.map((cert, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <img 
                  src={cert.image} 
                  alt={cert.name}
                  className="w-20 h-20 mx-auto object-cover rounded-lg"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-600">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
