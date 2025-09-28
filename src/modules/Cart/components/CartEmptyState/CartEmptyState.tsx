import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export const CartEmptyState = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-6" data-testid="shopping-cart-icon" />
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {t('cart.empty.title')}
        </h2>
        
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          {t('cart.empty.description')}
        </p>
        
        <Link href="/">
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium">
            {t('cart.empty.continueButton')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

