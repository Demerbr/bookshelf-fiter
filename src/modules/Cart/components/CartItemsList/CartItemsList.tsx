import { CartItem } from '@/types/cart';
import { CartItemCard } from './CartItemCard/CartItemCard';

interface CartItemsListProps {
  items: CartItem[];
}

export const CartItemsList = ({ items }: CartItemsListProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Itens no Carrinho
      </h2>
      
      <div className="space-y-4">
        {items.map((item) => (
          <CartItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
