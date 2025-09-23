import { Star } from "lucide-react";
import { useBookCardContext } from "./bookCardContext";

interface BookCardRatingProps {
  rating?: number;
  showStars?: boolean;
  showNumber?: boolean;
  className?: string;
}

export function BookCardRating({ 
  rating = 4.5, 
  showStars = true, 
  showNumber = true, 
  className 
}: BookCardRatingProps) {
  const { book } = useBookCardContext();
  
  return (
    <div className={`flex items-center space-x-1 ${className || ''}`}>
      {showStars && (
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      )}
      {showNumber && (
        <span className="text-xs text-gray-500">({rating})</span>
      )}
    </div>
  );
}
