
interface EnvironmentSectionProps {
  data: {
    enabled: boolean;
    title: string;
    subtitle: string;
    commitments: Array<{
      title: string;
      description: string;
      icon: string;
      progress?: number;
      target?: string;
    }>;
  };
}

export const EnvironmentSection = ({ data }: EnvironmentSectionProps) => {
  if (!data.enabled) return null;

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.commitments.map((commitment, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{commitment.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900">
                  {commitment.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {commitment.description}
              </p>
              
              {commitment.progress !== undefined && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-700 mb-1">
                    <span>Progress</span>
                    <span>{commitment.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${commitment.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              {commitment.target && (
                <div className="bg-green-100 rounded-lg p-3">
                  <p className="text-sm font-medium text-green-800">
                    Target: {commitment.target}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
