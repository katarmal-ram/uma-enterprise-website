
interface NewsSectionProps {
  data: {
    enabled: boolean;
    title: string;
    subtitle: string;
    articles: Array<{
      title: string;
      excerpt: string;
      date: string;
      image: string;
      category?: string;
      author?: string;
    }>;
  };
}

export const NewsSection = ({ data }: NewsSectionProps) => {
  if (!data.enabled) return null;

  return (
    <section className="py-20 bg-white">
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
          {data.articles.map((article, index) => (
            <article key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                {article.category && (
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded mb-3">
                    {article.category}
                  </span>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                  {article.author && <span>By {article.author}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
