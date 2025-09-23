import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useBookCardContext } from "./bookCardContext";

interface BookCardImageProps {
  showFavoriteButton?: boolean;
  className?: string;
}

export function BookCardImage({ showFavoriteButton = true, className }: BookCardImageProps) {
  const { book, cleanImageUrl } = useBookCardContext();
  
  return (
    <div className={`relative mb-3 ${className || ''}`}>
      <Link href={`/books/${book.id}`}>
        <div className="aspect-[2/3] overflow-hidden rounded-md bg-gray-100">
          {cleanImageUrl ? (
            <Image 
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
        <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
          <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
        </button>
      )}
    </div>
  );
}
