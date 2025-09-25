import { Heart } from 'lucide-react';

interface FavoritesHeaderProps {
  count: number;
}

export const FavoritesHeader = ({ count }: FavoritesHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <Heart className="h-8 w-8 text-red-500 fill-current" />
        <h1 className="text-3xl font-bold text-gray-900">
          Meus Favoritos
        </h1>
      </div>
      
      <p className="text-gray-600">
        {count === 1 
          ? `${count} livro favorito`
          : `${count} livros favoritos`
        }
      </p>
    </div>
  );
};
