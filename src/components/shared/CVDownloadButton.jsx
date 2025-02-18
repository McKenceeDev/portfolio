import { useState } from 'react';
import { Download } from 'lucide-react';

const CVDownloadButton = () => {
  const [error, setError] = useState(null);

  const handleDownload = async () => {
    try {
      setError(null);
      const cvPath = '/OscarLeandroGonzalez-CV.pdf';
      
      const response = await fetch(cvPath);
      if (!response.ok) {
        throw new Error('No se pudo cargar el CV');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'OscarLeandroGonzalez-CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError('Error al descargar el CV');
      console.error('Error al descargar CV:', err);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleDownload}
        className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center group"
        title="Descargar CV"
      >
        <Download className="h-5 w-5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap ml-0 group-hover:ml-2">
          CV
        </span>
      </button>
      
      {error && (
        <div className="absolute bottom-full right-0 mb-2 p-2 bg-red-100 text-red-700 rounded-md text-sm whitespace-nowrap">
          {error}
        </div>
      )}
    </div>
  );
};

export default CVDownloadButton;