import { Book } from '@/services/types/book';

export interface FavoriteItem {
  id: string;           // ID do livro
  book: Book;           // Dados completos do livro
  addedAt: string;      // Data que foi adicionado
}

export interface FavoritesState {
  items: FavoriteItem[];
  count: number;
}

export interface FavoritesActions {
  addFavorite: (book: Book) => void;
  removeFavorite: (id: string) => void;
  clearFavorites: () => void;
  isFavorite: (id: string) => boolean;
}
