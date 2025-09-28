import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FavoritesHeaderProps {
  count: number;
}

export const FavoritesHeader = ({ count }: FavoritesHeaderProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <Heart className="h-8 w-8 text-red-500 fill-current" data-testid="heart-icon" />
        <h1 className="text-3xl font-bold text-gray-900">
          {t('favorites.title')}
        </h1>
      </div>
      
      <p className="text-gray-600">
        {t('favorites.count', { count })}
      </p>
    </div>
  );
};
