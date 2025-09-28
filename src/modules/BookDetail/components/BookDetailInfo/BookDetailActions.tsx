import { Button } from "@/components/ui/button";
import { Heart, Share2 } from "lucide-react";
import { useTranslation } from 'react-i18next';

interface BookDetailActionsProps {
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
  onShare?: () => void;
}

export function BookDetailActions({ 
  onAddToCart, 
  onAddToWishlist, 
  onShare 
}: BookDetailActionsProps) {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-3">
      <Button 
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 rounded-md"
        onClick={onAddToCart}
      >
        {t('book.addToCart')}
      </Button>
      
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
