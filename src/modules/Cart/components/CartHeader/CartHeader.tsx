import { ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CartHeaderProps {
  itemCount: number;
}

export const CartHeader = ({ itemCount }: CartHeaderProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <ShoppingCart className="h-8 w-8 text-yellow-600" data-testid="shopping-cart-icon" />
        <h1 className="text-3xl font-bold text-gray-900">
          {t('cart.title')}
        </h1>
      </div>
      
      <p className="text-gray-600">
        {t('cart.count', { count: itemCount })}
      </p>
    </div>
  );
};

