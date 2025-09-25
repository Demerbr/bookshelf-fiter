import { ShoppingCart } from 'lucide-react';

interface CartHeaderProps {
  itemCount: number;
}

export const CartHeader = ({ itemCount }: CartHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <ShoppingCart className="h-8 w-8 text-yellow-600" />
        <h1 className="text-3xl font-bold text-gray-900">
          Carrinho de Compras
        </h1>
      </div>
      
      <p className="text-gray-600">
        {itemCount === 1 
          ? `${itemCount} item no seu carrinho`
          : `${itemCount} itens no seu carrinho`
        }
      </p>
    </div>
  );
};

