"use client";

import { useCart } from '@/hooks/useCart';
import { CartHeader } from './components/CartHeader';
import { CartItemsList } from './components/CartItemsList';
import { CartSummary } from './components/CartSummary';
import { CartEmptyState } from './components/CartEmptyState';
import { PageLayout } from '@/components/Layout';
import { useGridClasses } from '@/hooks/useGridClasses';

export const CartModule = () => {
  const { cartItems, totalItems, totalPrice, isEmpty } = useCart();
  const gridClasses = useGridClasses('cart');

  if (isEmpty) {
    return <CartEmptyState />;
  }

  return (
    <PageLayout>
      <CartHeader itemCount={totalItems} />
      
      <div className={gridClasses}>
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
    </PageLayout>
  );
};

