interface BookCardPriceProps {
  currentPrice?: string;
  originalPrice?: string;
  showOriginalPrice?: boolean;
  className?: string;
}

export function BookCardPrice({ 
  currentPrice = "R$ 29,90", 
  originalPrice = "R$ 39,90", 
  showOriginalPrice = true, 
  className 
}: BookCardPriceProps) {
  return (
    <div className={`flex items-center space-x-2 ${className || ''}`}>
      <span className="text-lg font-bold text-gray-900">{currentPrice}</span>
      {showOriginalPrice && (
        <span className="text-sm text-gray-500 line-through">{originalPrice}</span>
      )}
    </div>
  );
}
