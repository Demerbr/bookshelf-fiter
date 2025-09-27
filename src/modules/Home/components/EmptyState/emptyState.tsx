import { Search } from "lucide-react";
import { useTranslation } from 'react-i18next';

export function EmptyState() {
  const { t } = useTranslation();
  
  return (
    <div className="text-center py-16">
      <div className="bg-white rounded-lg shadow-amazon border border-amazon-border p-12 max-w-md mx-auto">
        <div className="text-amazon-text-light mb-6">
          <Search className="w-20 h-20 mx-auto" />
        </div>
        <h3 className="text-xl font-medium text-amazon-text mb-3">
          {t('search.noBooksFound')}
        </h3>
        <p className="text-amazon-text-secondary">
          {t('search.adjustFilters')}
        </p>
      </div>
    </div>
  );
}
