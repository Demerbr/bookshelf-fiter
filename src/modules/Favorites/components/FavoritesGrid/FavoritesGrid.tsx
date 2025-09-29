import { FavoriteItem } from '@/types/favorites';
import { FavoriteBookCard } from './FavoriteBookCard';
import { useTranslation } from 'react-i18next';
import { useGridClasses } from '@/hooks/useGridClasses';

interface FavoritesGridProps {
  items: FavoriteItem[];
}

export const FavoritesGrid = ({ items }: FavoritesGridProps) => {
  const { t } = useTranslation();
  const gridClasses = useGridClasses('favorites');
  
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        {t('favorites.title')}
      </h2>
      
      <div className={gridClasses}>
        {items.map((favorite) => (
          <FavoriteBookCard key={favorite.id} favorite={favorite} />
        ))}
      </div>
    </div>
  );
};
