import { ShoppingCart } from 'lucide-react';
import { EmptyState } from '@/components/EmptyState';

export const CartEmptyState = () => {
  return (
    <EmptyState
      icon={ShoppingCart}
      titleKey="cart.empty.title"
      descriptionKey="cart.empty.description"
      buttonTextKey="cart.empty.continueButton"
      buttonHref="/"
      buttonClassName="bg-yellow-400 hover:bg-yellow-500 text-gray-900"
      iconTestId="shopping-cart-icon"
    />
  );
};

