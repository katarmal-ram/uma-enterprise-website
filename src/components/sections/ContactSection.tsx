
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactSectionProps {
  data: {
    enabled: boolean;
    title: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
    phone: string;
    email: string;
    whatsapp: string;
    hours: {
      weekdays: string;
      weekend: string;
    };
    mapEmbed: string;
  };
}

export const ContactSection = ({ data }: ContactSectionProps) => {
  if (!data.enabled) return null;

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {data.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">
                  {data.address.street}<br />
                  {data.address.city}, {data.address.state} {data.address.zip}<br />
                  {data.address.country}
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">{data.phone}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <a 
                  href={`mailto:${data.email}`}
                  className="text-gray-600 hover:text-blue-600"
                >
                  {data.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600">
                  {data.hours.weekdays}<br />
                  {data.hours.weekend}
                </p>
              </div>
            </div>
          </div>
          
          <div className="h-96 rounded-lg overflow-hidden">
            <iframe 
              src={data.mapEmbed}
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
