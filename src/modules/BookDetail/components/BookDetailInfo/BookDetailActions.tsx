import { Button } from "@/components/ui/button";
import { Heart, Share2 } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useBookDetailContext } from '../BookDetailContext/bookDetailContext';
import { useCart } from '@/hooks/useCart';
import { QuantityCounter } from '@/components/ui/quantity-counter';

interface BookDetailActionsProps {
  onAddToWishlist?: () => void;
  onShare?: () => void;
}

export function BookDetailActions({ 
  onAddToWishlist, 
  onShare 
}: BookDetailActionsProps) {
  const { t } = useTranslation();
  const { book } = useBookDetailContext();
  const { isInCart, getItemQuantity, addBookToCart, updateBookQuantity } = useCart();
  
  const isBookInCart = isInCart(book.id);
  const currentQuantity = getItemQuantity(book.id);
  
  const handleAddToCart = () => {
    addBookToCart(book);
  };
  
  const handleIncreaseQuantity = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    updateBookQuantity(book.id, currentQuantity + 1);
  };
  
  const handleDecreaseQuantity = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    updateBookQuantity(book.id, currentQuantity - 1);
  };
  
  return (
    <div className="space-y-4">
      <Button 
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 rounded-md"
        onClick={handleAddToCart}
      >
        {t('book.addToCart')}
      </Button>
      
      {isBookInCart && (
        <div className="flex items-center justify-center py-2">
          <QuantityCounter
            quantity={currentQuantity}
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
            size="md"
            className="max-w-[140px]"
          />
        </div>
      )}
      
      <div className="flex space-x-2">
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={onAddToWishlist}
        >
          <Heart className="w-4 h-4 mr-2" />
          {t('book.wishlist')}
        </Button>
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={onShare}
        >
          <Share2 className="w-4 h-4 mr-2" />
          {t('book.share')}
        </Button>
      </div>
    </div>
  );
}
