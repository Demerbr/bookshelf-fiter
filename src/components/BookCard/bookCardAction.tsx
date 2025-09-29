import { Button } from "@/components/ui/button";
import { useBookCardContext } from "./bookCardContext";
import { useCart } from "@/hooks/useCart";
import { useTranslation } from 'react-i18next';
import { QuantityCounter } from '@/components/ui/quantity-counter';

interface BookCardActionProps {
  children?: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
}

export function BookCardAction({ 
  children, 
  variant = "default",
  className,
  onClick 
}: BookCardActionProps) {
  const { book } = useBookCardContext();
  const { addBookToCart, isInCart, getItemQuantity, updateBookQuantity } = useCart();
  const { t } = useTranslation();
  
  const isBookInCart = isInCart(book.id);
  const quantity = getItemQuantity(book.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (onClick) {
      onClick();
    } else {
      addBookToCart(book);
    }
  };

  const handleIncreaseQuantity = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    updateBookQuantity(book.id, quantity + 1);
  };

  const handleDecreaseQuantity = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    updateBookQuantity(book.id, quantity - 1);
  };

  return (
    <div className="flex flex-col gap-2">
      <Button 
        className={`w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium text-sm py-2 rounded-md transition-colors ${className || ''}`}
        variant={variant}
        onClick={handleAddToCart}
      >
        {children || t('book.addToCart')}
      </Button>
      
      {isBookInCart && (
        <div className="flex items-center justify-center px-2">
          <QuantityCounter
            quantity={quantity}
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
            size="sm"
            className="w-full max-w-[120px]"
          />
        </div>
      )}
    </div>
  );
}
