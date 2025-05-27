
import { useEffect } from 'react';
import { Navigation } from './components/sections/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProductsSection } from './components/sections/ProductsSection';
import { WhyChooseUsSection } from './components/sections/WhyChooseUsSection';
import { GallerySection } from './components/sections/GallerySection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { QuoteSection } from './components/sections/QuoteSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';
import { InfrastructureSection } from './components/sections/InfrastructureSection';
import { LeadershipSection } from './components/sections/LeadershipSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { CSRSection } from './components/sections/CSRSection';
import { AwardsSection } from './components/sections/AwardsSection';
import { TechnologySection } from './components/sections/TechnologySection';
import { NewsSection } from './components/sections/NewsSection';
import { FAQSection } from './components/sections/FAQSection';
import { QualitySection } from './components/sections/QualitySection';
import { EnvironmentSection } from './components/sections/EnvironmentSection';
import { DownloadCatalogSection } from './components/sections/DownloadCatalogSection';
import { useSiteConfig } from './hooks/useSiteConfig';
import { useProducts } from './hooks/useProducts';

function App() {
  const { config, loading: configLoading } = useSiteConfig();
  const { data: productsData, loading: productsLoading } = useProducts();

  const loading = configLoading || productsLoading;

  // Apply theme styles to CSS custom properties
  useEffect(() => {
    if (config?.theme) {
      const theme = config.theme;
      const root = document.documentElement;
      
      root.style.setProperty('--primary-color', theme.colors.primary);
      root.style.setProperty('--secondary-color', theme.colors.secondary);
      root.style.setProperty('--accent-color', theme.colors.accent);
      root.style.setProperty('--background-color', theme.colors.background);
      root.style.setProperty('--text-color', theme.colors.text);
    }
  }, [config?.theme]);

  const renderDynamicSection = (section: any) => {
    if (!section.enabled) return null;

    switch (section.type) {
      case 'infrastructure':
        return <InfrastructureSection key={section.id} data={section.data} />;
      case 'leadership':
        return <LeadershipSection key={section.id} data={section.data} />;
      case 'process':
        return <ProcessSection key={section.id} data={section.data} />;
      case 'csr':
        return <CSRSection key={section.id} data={section.data} />;
      case 'awards':
        return <AwardsSection key={section.id} data={section.data} />;
      case 'technology':
        return <TechnologySection key={section.id} data={section.data} />;
      case 'news':
        return <NewsSection key={section.id} data={section.data} />;
      case 'faq':
        return <FAQSection key={section.id} data={section.data} />;
      case 'quality':
        return <QualitySection key={section.id} data={section.data} />;
      case 'environment':
        return <EnvironmentSection key={section.id} data={section.data} />;
      case 'download-catalog':
        return <DownloadCatalogSection key={section.id} data={section.data} />;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-700">Loading...</h2>
        </div>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Error Loading Site</h2>
          <p className="text-gray-600">Failed to load site configuration</p>
        </div>
      </div>
    );
  }

  // Ensure theme exists with fallback
  const theme = config.theme || {
    colors: {
      primary: '#3b82f6',
      secondary: '#1e40af',
      accent: '#06b6d4',
      background: '#ffffff',
      text: '#1f2937'
    },
    hero: {
      layout: 'centered'
    }
  };

  return (
    <div className="min-h-screen" style={{ 
      backgroundColor: theme.colors.background,
      color: theme.colors.text 
    }}>
      <Navigation 
        data={config.navigation} 
        siteName={config.site.title.split(' - ')[0]} 
        logo={config.site.logo}
        theme={theme}
      />
      
      <div id="hero">
        <HeroSection data={{ ...config.sections.hero, layout: theme.hero.layout }} />
      </div>
      
      <div id="about">
        <AboutSection data={config.sections.about} />
      </div>
      
      <div id="features">
        <FeaturesSection data={config.sections.features} />
      </div>
      
      {config.sections.services.enabled && (
        <div id="services">
          <ServicesSection data={config.sections.services} />
        </div>
      )}
      
      {config.sections.products.enabled && (
        <div id="products">
          <ProductsSection data={config.sections.products} productsData={productsData} />
        </div>
      )}
      
      <div id="why-choose-us">
        <WhyChooseUsSection data={config.sections.whyChooseUs} />
      </div>
      
      {/* Render Dynamic Sections */}
      {config.sectionsOrder && config.sectionsOrder.map((section: any) => 
        renderDynamicSection(section)
      )}
      
      <div id="gallery">
        <GallerySection data={config.sections.gallery} />
      </div>
      
      {config.sections.certifications.enabled && (
        <div id="certifications">
          <CertificationsSection data={config.sections.certifications} />
        </div>
      )}
      
      <div id="testimonials">
        <TestimonialsSection data={config.sections.testimonials} />
      </div>
      
      <div id="request-quote">
        <QuoteSection data={config.sections.quote} />
      </div>
      
      <div id="contact">
        <ContactSection data={config.sections.contact} />
      </div>
      
      <Footer data={config.footer} />
    </div>
  );
}

export default App;
