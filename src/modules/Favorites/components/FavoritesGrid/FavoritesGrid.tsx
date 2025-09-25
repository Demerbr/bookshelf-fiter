import { FavoriteItem } from '@/types/favorites';
import { FavoriteBookCard } from './FavoriteBookCard';

interface FavoritesGridProps {
  items: FavoriteItem[];
}

export const FavoritesGrid = ({ items }: FavoritesGridProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Seus Livros Favoritos
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((favorite) => (
          <FavoriteBookCard key={favorite.id} favorite={favorite} />
        ))}
      </div>
    </div>
  );
};
