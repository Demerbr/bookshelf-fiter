import { FavoriteItem } from '@/types/favorites';
import { useFavorites } from '@/hooks/useFavorites';
import { BookCard, BookCardImage, BookCardInfo, BookCardRating, BookCardPrice, BookCardAction } from '@/components/BookCard';

interface FavoriteBookCardProps {
  favorite: FavoriteItem;
}

export const FavoriteBookCard = ({ favorite }: FavoriteBookCardProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { book } = favorite;

  const handleAddToCart = () => {
    // TODO: Implementar quando criarmos o sistema de carrinho
    console.log('Adicionar ao carrinho:', book.name);
  };

  return (
    <BookCard book={book}>
      <BookCardImage 
        onFavoriteClick={() => toggleFavorite(book)}
        isFavorite={isFavorite(book.id)}
      />
      <BookCardInfo />
      <BookCardRating />
      <BookCardPrice />
      <BookCardAction onClick={handleAddToCart} />
    </BookCard>
  );
};
