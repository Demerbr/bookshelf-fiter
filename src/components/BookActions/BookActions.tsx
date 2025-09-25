import { Heart, ShoppingCart } from 'lucide-react';
import { Book } from '@/services/types/book';
import { useFavorites } from '@/hooks/useFavorites';
import { Button } from '@/components/ui/button';

interface BookActionsProps {
  book: Book;
  showLabels?: boolean;
  size?: 'sm' | 'default';
  showCartButton?: boolean;
}

export const BookActions = ({ 
  book, 
  showLabels = false, 
  size = 'sm',
  showCartButton = false
}: BookActionsProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  
  const isBookFavorite = isFavorite(book.id);

  const handleToggleFavorite = () => {
    toggleFavorite(book);
  };

  const handleAddToCart = () => {
    // TODO: Implementar quando criarmos o sistema de carrinho
    console.log('Adicionar ao carrinho:', book.name);
  };

  return (
    <div className="flex gap-2">
      <Button
        size={size}
        variant="ghost"
        onClick={handleToggleFavorite}
        className={`${
          isBookFavorite 
            ? 'text-red-500 hover:text-red-600 hover:bg-red-50' 
            : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
        }`}
      >
        <Heart className={`h-4 w-4 ${isBookFavorite ? 'fill-current' : ''}`} />
        {showLabels && (
          <span className="ml-2">
            {isBookFavorite ? 'Favorito' : 'Favoritar'}
          </span>
        )}
      </Button>

      {showCartButton && (
        <Button
          size={size}
          variant="outline"
          onClick={handleAddToCart}
          className="text-blue-600 hover:text-blue-700"
        >
          <ShoppingCart className="h-4 w-4" />
          {showLabels && (
            <span className="ml-2">Adicionar</span>
          )}
        </Button>
      )}
    </div>
  );
};
