interface BookDetailPriceProps {
  currentPrice?: string;
  originalPrice?: string;
  discount?: number;
  discountText?: string;
}

export function BookDetailPrice({ 
  currentPrice = "R$ 29,90", 
  originalPrice = "R$ 39,90", 
  discount = 25,
  discountText = "25% OFF"
}: BookDetailPriceProps) {
  const savings = discount ? `Economize R$ ${(parseFloat(originalPrice.replace('R$ ', '').replace(',', '.')) - parseFloat(currentPrice.replace('R$ ', '').replace(',', '.'))).toFixed(2).replace('.', ',')} (${discount}%)` : '';
  
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-3">
        <span className="text-3xl font-bold text-gray-900">{currentPrice}</span>
        <span className="text-lg text-gray-500 line-through">{originalPrice}</span>
        <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded">{discountText}</span>
      </div>
      {savings && (
        <p className="text-sm text-gray-600">
          {savings}
        </p>
      )}
    </div>
  );
}
