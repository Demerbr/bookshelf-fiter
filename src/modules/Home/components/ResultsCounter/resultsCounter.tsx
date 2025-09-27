import { useTranslation } from 'react-i18next';

interface ResultsCounterProps {
  count?: number;
  isLoading?: boolean;
}

export function ResultsCounter({ count, isLoading }: ResultsCounterProps) {
  const { t } = useTranslation();
  
  return (
    <div>
      <p className="text-sm text-amazon-text-secondary font-medium">
        {isLoading ? t('common.loading') : t('search.resultsFound', { count: count || 0 })}
      </p>
    </div>
  );
}
