
interface FooterProps {
  data: {
    enabled: boolean;
    copyright: string;
    socialLinks: Array<{
      platform: string;
      url: string;
      icon: string;
    }>;
    quickLinks: Array<{
      text: string;
      url: string;
    }>;
  };
}

export const Footer = ({ data }: FooterProps) => {
  if (!data.enabled) return null;

  const scrollToSection = (url: string) => {
    if (url.startsWith('#')) {
      const element = document.querySelector(url);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {data.quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.url)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {data.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center space-y-2">
          <p className="text-gray-400">{data.copyright}</p>
          <p className="text-gray-500 text-sm">
            Made with ❤️ by{' '}
            <a 
              href="https://ferralabs.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              ferralabs.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
