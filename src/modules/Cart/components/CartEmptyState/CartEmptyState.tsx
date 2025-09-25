import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const CartEmptyState = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Seu carrinho está vazio
        </h2>
        
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Que tal explorar nossos livros e adicionar alguns títulos ao seu carrinho?
        </p>
        
        <Link href="/">
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium">
            Continuar Comprando
          </Button>
        </Link>
      </div>
    </div>
  );
};

