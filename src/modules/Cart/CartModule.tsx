"use client";

import { useCart } from '@/hooks/useCart';
import { CartHeader } from './components/CartHeader';
import { CartItemsList } from './components/CartItemsList';
import { CartSummary } from './components/CartSummary';
import { CartEmptyState } from './components/CartEmptyState';

export const CartModule = () => {
  const { cartItems, totalItems, totalPrice, isEmpty } = useCart();

  if (isEmpty) {
    return <CartEmptyState />;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <CartHeader itemCount={totalItems} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de itens - ocupa 2/3 da largura */}
          <div className="lg:col-span-2">
            <CartItemsList items={cartItems} />
          </div>
          
          {/* Resumo do pedido - ocupa 1/3 da largura */}
          <div className="lg:col-span-1">
            <CartSummary 
              totalItems={totalItems} 
              totalPrice={totalPrice} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

