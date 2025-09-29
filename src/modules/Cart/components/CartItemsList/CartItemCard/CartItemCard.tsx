import Link from 'next/link';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { Trash2 } from 'lucide-react';
import { CartItem } from '@/types/cart';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { QuantityCounter } from '@/components/ui/quantity-counter';
import { useTranslation } from 'react-i18next';

interface CartItemCardProps {
  item: CartItem;
}

export const CartItemCard = ({ item }: CartItemCardProps) => {
  const { updateBookQuantity, removeBookFromCart, formatPrice } = useCart();
  const { t } = useTranslation();

  const handleQuantityChange = (newQuantity: number) => {
    updateBookQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    removeBookFromCart(item.id);
  };

  const getAuthorsText = () => {
    return item.book.authors.length > 1 
      ? item.book.authors.join(', ') 
      : item.book.authors[0];
  };

  const getCleanImageUrl = () => {
    return item.book.imagelink?.replace(/\]$/, '') || '';
  };

  return (
    <div className="border-b border-gray-200 pb-4 last:border-b-0">
      <div className="flex gap-4">
        <Link href={`/books/${item.book.id}`} className="flex-shrink-0">
          <div className="w-24 h-32 relative">
            <OptimizedImage
              src={getCleanImageUrl()}
              alt={item.book.name}
              fill
              className="object-cover rounded-md"
            />
          </div>
        </Link>
        
        <div className="flex-1 min-w-0">
          <Link href={`/books/${item.book.id}`}>
            <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors line-clamp-2 mb-2">
              {item.book.name}
            </h3>
          </Link>
          
          <p className="text-sm text-gray-600 mb-2">
            {t('book.by')} {getAuthorsText()}
          </p>
          
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
              {t('cart.price')}: <span className="font-medium">{formatPrice(item.unitPrice)}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">{t('cart.quantity')}:</span>
              <QuantityCounter
                quantity={item.quantity}
                onIncrease={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleQuantityChange(item.quantity + 1);
                }}
                onDecrease={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleQuantityChange(item.quantity - 1);
                }}
                size="sm"
              />
            </div>
          </div>
        </div>
        
        <div className="flex-shrink-0 text-right">
          <div className="text-lg font-bold text-gray-900 mb-2">
            {formatPrice(item.unitPrice * item.quantity)}
          </div>
          
          <Button
            size="sm"
            variant="ghost"
            onClick={handleRemove}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            {t('cart.remove')}
          </Button>
        </div>
      </div>
    </div>
  );
};

