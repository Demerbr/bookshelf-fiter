"use client";

import { useFavorites } from '@/hooks/useFavorites';
import { FavoritesHeader } from './components/FavoritesHeader';
import { FavoritesGrid } from './components/FavoritesGrid';
import { FavoritesEmptyState } from './components/FavoritesEmptyState';
import { PageLayout } from '@/components/Layout';

export const FavoritesModule = () => {
  const { favorites, favoritesCount, isEmpty } = useFavorites();

  if (isEmpty) {
    return <FavoritesEmptyState />;
  }

  return (
    <PageLayout>
      <FavoritesHeader count={favoritesCount} />
      <FavoritesGrid items={favorites} />
    </PageLayout>
  );
};
