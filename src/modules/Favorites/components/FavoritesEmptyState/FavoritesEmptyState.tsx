import { Heart } from 'lucide-react';
import { EmptyState } from '@/components/EmptyState';

export const FavoritesEmptyState = () => {
  return (
    <EmptyState
      icon={Heart}
      titleKey="favorites.empty.title"
      descriptionKey="favorites.empty.description"
      buttonTextKey="favorites.empty.exploreButton"
      buttonHref="/"
      buttonClassName="bg-blue-600 hover:bg-blue-700"
      iconTestId="heart-icon"
    />
  );
};
