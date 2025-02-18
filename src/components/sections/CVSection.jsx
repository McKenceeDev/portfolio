import { FileText, Download, Eye } from 'lucide-react';
import CVDownloadButton from '../shared/CVDownloadButton';

const CVSection = () => {
  const handlePreview = () => {
    window.open('/OscarLeandroGonzalez-CV.pdf', '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center">
        <div className="mb-4 text-center">
          <FileText className="h-8 w-8 text-blue-600 mb-2 mx-auto" />
          <h3 className="text-sm font-medium dark:text-white">Currículum Vitae</h3>
        </div>
        
        <div className="space-y-2">
          <CVDownloadButton variant="primary" />
          
          <button
            onClick={handlePreview}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <Eye className="h-4 w-4" />
            <span>Vista Previa</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CVSection;