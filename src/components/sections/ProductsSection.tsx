
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductCategory, Product } from '@/hooks/useProducts';

interface ProductsSectionProps {
  data: {
    enabled: boolean;
    title: string;
    subtitle?: string;
  };
  productsData: {
    categories: ProductCategory[];
    featured: string[];
  } | null;
}

export const ProductsSection = ({ data, productsData }: ProductsSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  if (!data.enabled || !productsData) return null;

  const getAllProducts = (): Product[] => {
    return productsData.categories.flatMap(category => 
      category.products.map(product => ({ ...product, categoryId: category.id }))
    );
  };

  const getFilteredProducts = () => {
    if (activeCategory === 'all') {
      return getAllProducts();
    }
    const category = productsData.categories.find(cat => cat.id === activeCategory);
    return category ? category.products.map(product => ({ ...product, categoryId: category.id })) : [];
  };

  const filteredProducts = getFilteredProducts();

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Products
          </button>
          {productsData.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Card key={`${product.id}-${index}`} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 transform group">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Specifications:</h4>
                    <ul className="space-y-1">
                      {product.specifications.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, appIndex) => (
                        <span 
                          key={appIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Category Overview Cards */}
        {activeCategory === 'all' && (
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Product Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productsData.categories.map((category) => (
                <Card 
                  key={category.id} 
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 transform"
                  onClick={() => setActiveCategory(category.id)}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-blue-600 font-medium">
                      {category.products.length} products →
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
