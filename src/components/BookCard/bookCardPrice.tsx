"use client";

import { useBookCardContext } from "./bookCardContext";

interface BookCardPriceProps {
  showOriginalPrice?: boolean;
  className?: string;
}

const formatPrice = (price: number): string => `R$ ${price.toFixed(2).replace('.', ',')}`;

export function BookCardPrice({ 
  showOriginalPrice = true, 
  className 
}: BookCardPriceProps) {
  const { book } = useBookCardContext();
  
  const currentPrice = parseFloat(book.price);
  const originalPrice = currentPrice * 1.25;
  
  return (
    <div className={`flex items-center space-x-2 ${className || ''}`}>
      <span className="text-lg font-bold text-amazon-text">{formatPrice(currentPrice)}</span>
      {showOriginalPrice && (
        <span className="text-sm text-amazon-text-light line-through">{formatPrice(originalPrice)}</span>
      )}
    </div>
  );
}
