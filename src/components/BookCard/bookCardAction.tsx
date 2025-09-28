import { Button } from "@/components/ui/button";
import { useBookCardContext } from "./bookCardContext";
import { useCart } from "@/hooks/useCart";
import { useTranslation } from 'react-i18next';

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
  const { addBookToCart, isInCart, getItemQuantity } = useCart();
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

  const getButtonText = () => {
    if (children) return children;
    if (isBookInCart) {
      return quantity > 1 ? t('book.inCartPlural', { count: quantity }) : t('book.inCart');
    }
    return t('book.addToCart');
  };

  return (
    <Button 
      className={`w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium text-sm py-2 rounded-md transition-colors ${className || ''}`}
      variant={variant}
      onClick={handleAddToCart}
      disabled={isBookInCart && quantity >= 10}
    >
      {getButtonText()}
    </Button>
  );
}
