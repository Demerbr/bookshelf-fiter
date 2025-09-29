import { Heart } from "lucide-react";
import Link from "next/link";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useBookCardContext } from "./bookCardContext";

interface BookCardImageProps {
  showFavoriteButton?: boolean;
  className?: string;
  onFavoriteClick?: (bookId: string) => void;
  isFavorite?: boolean;
}

export function BookCardImage({ 
  showFavoriteButton = true, 
  className, 
  onFavoriteClick,
  isFavorite = false 
}: BookCardImageProps) {
  const { book, cleanImageUrl } = useBookCardContext();

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onFavoriteClick?.(book.id);
  };
  
  return (
    <div className={`relative mb-3 ${className || ''}`}>
      <Link 
        href={`/books/${book.id}`}
        prefetch={true}
        className="block"
      >
        <div className="aspect-[2/3] overflow-hidden rounded-md bg-gray-100 cursor-pointer">
        {cleanImageUrl ? (
          <OptimizedImage 
            src={cleanImageUrl} 
            alt={book.name}
            width={200}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-400 text-sm">Sem capa</span>
          </div>
        )}
        </div>
      </Link>
      
      {showFavoriteButton && (
        <button 
          onClick={handleToggleFavorite}
          className={`absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors ${
            isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
          }`}
          aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
      )}
    </div>
  );
}
