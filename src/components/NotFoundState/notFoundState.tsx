import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

interface NotFoundStateProps {
  searchQuery: string;
  onClearSearch: () => void;
}

export const NotFoundState = ({ searchQuery, onClearSearch }: NotFoundStateProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            {t('search.noResults')}
          </h2>
          <p className="text-gray-500 mb-6">
            {t('search.noResultsDescription', { query: searchQuery })}
          </p>
        </div>
        
        <div className="space-y-3">
          <Button 
            onClick={onClearSearch}
            variant="outline"
            className="w-full"
          >
            <X className="w-4 h-4 mr-2" />
            {t('search.clearSearch')}
          </Button>
          
          <p className="text-sm text-gray-400">
            {t('search.searchTips')}
          </p>
          <ul className="text-sm text-gray-500 text-left space-y-1">
            <li>• {t('search.tipGeneral')}</li>
            <li>• {t('search.tipSpelling')}</li>
            <li>• {t('search.tipSynonyms')}</li>
            <li>• {t('search.tipLessWords')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

