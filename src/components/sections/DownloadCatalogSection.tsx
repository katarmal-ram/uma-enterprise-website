
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

interface DownloadCatalogSectionProps {
  data: {
    enabled: boolean;
    title: string;
    subtitle: string;
    catalogs: Array<{
      name: string;
      description: string;
      fileUrl: string;
      fileSize?: string;
      fileType?: string;
      thumbnail?: string;
    }>;
  };
}

export const DownloadCatalogSection = ({ data }: DownloadCatalogSectionProps) => {
  if (!data.enabled) return null;

  const handleDownload = (fileUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 bg-gray-50">
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
          {data.catalogs.map((catalog, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {catalog.thumbnail ? (
                    <img 
                      src={catalog.thumbnail} 
                      alt={catalog.name}
                      className="w-16 h-16 object-cover rounded-lg mr-4"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <FileText className="h-8 w-8 text-blue-600" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {catalog.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      {catalog.fileType && (
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs uppercase">
                          {catalog.fileType}
                        </span>
                      )}
                      {catalog.fileSize && (
                        <span>{catalog.fileSize}</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {catalog.description}
                </p>
                
                <Button 
                  onClick={() => handleDownload(catalog.fileUrl, catalog.name)}
                  className="w-full"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Catalog
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
