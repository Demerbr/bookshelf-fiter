"use client";

import { useBookDetailContext } from "@/modules/BookDetail/components/BookDetailContext/bookDetailContext";

interface BookDetailPriceProps {
  discount?: number;
  discountText?: string;
}

const formatPrice = (price: number): string => `R$ ${price.toFixed(2).replace('.', ',')}`;

export function BookDetailPrice({ 
  discount = 25,
  discountText = "25% OFF"
}: BookDetailPriceProps) {
  const { book } = useBookDetailContext();
  
  const currentPrice = parseFloat(book.price);
  const originalPrice = currentPrice * (1 + discount / 100);
  const savings = discount ? `Economize R$ ${(originalPrice - currentPrice).toFixed(2).replace('.', ',')} (${discount}%)` : '';
  
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-3">
        <span className="text-3xl font-bold text-gray-900">{formatPrice(currentPrice)}</span>
        <span className="text-lg text-gray-500 line-through">{formatPrice(originalPrice)}</span>
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
