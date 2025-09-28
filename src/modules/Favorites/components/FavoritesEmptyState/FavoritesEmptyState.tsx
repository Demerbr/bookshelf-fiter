import { Heart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export const FavoritesEmptyState = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Heart className="h-24 w-24 text-gray-300 mx-auto mb-6" data-testid="heart-icon" />
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {t('favorites.empty.title')}
        </h2>
        
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          {t('favorites.empty.description')}
        </p>
        
        <Link href="/">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            {t('favorites.empty.exploreButton')}
          </Button>
        </Link>
      </div>
    </div>
  );
};
