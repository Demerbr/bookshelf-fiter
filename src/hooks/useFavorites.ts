import { useFavoritesStore } from '@/stores/useFavoritesStore';
import { Book } from '@/services/types/book';

export const useFavorites = () => {
  const {
    items,
    count,
    addFavorite,
    removeFavorite,
    clearFavorites,
    isFavorite
  } = useFavoritesStore();

  // Função para alternar favorito (adicionar/remover)
  const toggleFavorite = (book: Book) => {
    if (isFavorite(book.id)) {
      removeFavorite(book.id);
    } else {
      addFavorite(book);
    }
  };

  return {
    // Estado
    favorites: items,
    favoritesCount: count,
    isEmpty: items.length === 0,
    
    // Ações
    addFavorite,
    removeFavorite,
    toggleFavorite,
    clearFavorites,
    isFavorite
  };
};
