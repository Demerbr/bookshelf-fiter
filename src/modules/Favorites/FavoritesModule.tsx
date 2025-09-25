"use client";

import { useFavorites } from '@/hooks/useFavorites';
import { FavoritesHeader } from './components/FavoritesHeader';
import { FavoritesGrid } from './components/FavoritesGrid';
import { FavoritesEmptyState } from './components/FavoritesEmptyState';

export const FavoritesModule = () => {
  const { favorites, favoritesCount, isEmpty } = useFavorites();

  if (isEmpty) {
    return <FavoritesEmptyState />;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <FavoritesHeader count={favoritesCount} />
        <FavoritesGrid items={favorites} />
      </div>
    </div>
  );
};
