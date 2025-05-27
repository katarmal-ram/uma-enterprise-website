
interface AboutSectionProps {
  data: {
    enabled: boolean;
    title: string;
    description: string;
    stats: Array<{
      number: string;
      label: string;
    }>;
  };
}

export const AboutSection = ({ data }: AboutSectionProps) => {
  if (!data.enabled) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {data.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {data.description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {data.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
