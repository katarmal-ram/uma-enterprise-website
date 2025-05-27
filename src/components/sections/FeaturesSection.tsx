
import { Check, Clock, Shield, Users } from "lucide-react";

const iconMap = {
  check: Check,
  clock: Clock,
  shield: Shield,
  users: Users,
};

interface FeaturesSectionProps {
  data: {
    enabled: boolean;
    title: string;
    items: Array<{
      icon: keyof typeof iconMap;
      title: string;
      description: string;
    }>;
  };
}

export const FeaturesSection = ({ data }: FeaturesSectionProps) => {
  if (!data.enabled) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {data.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Check;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
