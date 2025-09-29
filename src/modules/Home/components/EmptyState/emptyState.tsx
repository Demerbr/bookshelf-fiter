import { Search } from "lucide-react";
import { useTranslation } from 'react-i18next';

interface EmptyStateProps {
  searchQuery?: string;
  onClearSearch?: () => void;
}

export function EmptyState({ searchQuery }: EmptyStateProps) {
  const { t } = useTranslation();
  
  return (
    <div data-testid="empty-state" className="text-center py-16">
      <div className="bg-white rounded-lg shadow-amazon border border-amazon-border p-12 max-w-md mx-auto">
        <div className="text-amazon-text-light mb-6">
          <Search className="w-20 h-20 mx-auto" />
        </div>
        <h3 className="text-xl font-medium text-amazon-text mb-3">
          No books found
        </h3>
        {searchQuery && (
          <p className="text-amazon-text-secondary mb-3">
            for query &quot;{searchQuery}&quot;
          </p>
        )}
        <p className="text-amazon-text-secondary">
          {t('search.adjustFilters')}
        </p>
      </div>
    </div>
  );
}
