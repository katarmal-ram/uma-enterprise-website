
import { useState, useEffect } from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  specifications: string[];
  applications: string[];
  categoryId?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  products: Product[];
}

export interface ProductsData {
  categories: ProductCategory[];
  featured: string[];
}

export const useProducts = () => {
  const [data, setData] = useState<ProductsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/products.json');
        const productsData = await response.json();
        setData(productsData);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { data, loading };
};
