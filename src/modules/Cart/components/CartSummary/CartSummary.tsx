import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';

interface CartSummaryProps {
  totalItems: number;
  totalPrice: number;
}

export const CartSummary = ({ totalItems }: CartSummaryProps) => {
  const { formatTotalPrice } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 h-fit">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Resumo do Pedido
      </h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'itens'})</span>
          <span>{formatTotalPrice()}</span>
        </div>
        
        <div className="flex justify-between text-sm text-gray-600">
          <span>Frete</span>
          <span className="text-green-600">Grátis</span>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between text-lg font-bold text-gray-900">
            <span>Total</span>
            <span>{formatTotalPrice()}</span>
          </div>
        </div>
      </div>
      
      <Button 
        size="lg" 
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium mb-4"
      >
        Finalizar Compra
      </Button>
      
      <p className="text-xs text-gray-500 text-center">
        * Preços e disponibilidade estão sujeitos a alterações.
      </p>
    </div>
  );
};
