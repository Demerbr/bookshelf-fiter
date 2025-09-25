import { Heart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const FavoritesEmptyState = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Heart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Nenhum favorito ainda
        </h2>
        
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Explore nossos livros e adicione os seus favoritos para acessá-los facilmente depois.
        </p>
        
        <Link href="/">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Explorar Livros
          </Button>
        </Link>
      </div>
    </div>
  );
};
