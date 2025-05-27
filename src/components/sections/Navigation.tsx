
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationItem {
  text: string;
  link: string;
}

interface NavigationProps {
  data: {
    items: NavigationItem[];
  };
  siteName: string;
  logo?: string;
}

export const Navigation = ({ data, siteName, logo }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (link: string) => {
    const element = document.querySelector(link);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0 flex items-center gap-3">
            {logo && (
              <img
                src={logo}
                alt={`${siteName} logo`}
                className="h-8 w-8 object-contain"
              />
            )}
            <h1 className="text-2xl font-bold text-gray-900">
              {siteName}
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {data.items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.link)}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.text}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {data.items.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.link)}
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
