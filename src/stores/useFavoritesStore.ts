import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { FavoriteItem, FavoritesState, FavoritesActions } from '@/types/favorites';

interface FavoritesStore extends FavoritesState, FavoritesActions {}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      // Estado inicial
      items: [],
      count: 0,

      // Ações
      addFavorite: (book) => {
        const currentItems = get().items;
        
        // Verifica se já é favorito
        const isAlreadyFavorite = currentItems.some(item => item.id === book.id);
        
        if (!isAlreadyFavorite) {
          // Cria novo favorito
          const newFavorite: FavoriteItem = {
            id: book.id,
            book,
            addedAt: new Date().toISOString()
          };
          
          // Atualiza o estado
          const updatedItems = [...currentItems, newFavorite];
          set({
            items: updatedItems,
            count: updatedItems.length
          });
        }
      },

      removeFavorite: (id) => {
        const currentItems = get().items;
        const updatedItems = currentItems.filter(item => item.id !== id);
        
        set({
          items: updatedItems,
          count: updatedItems.length
        });
      },

      clearFavorites: () => {
        set({
          items: [],
          count: 0
        });
      },

      isFavorite: (id) => {
        return get().items.some(item => item.id === id);
      }
    }),
    {
      name: 'bookshelf-favorites',
      version: 1
    }
  )
);
