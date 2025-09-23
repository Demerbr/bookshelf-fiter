import { Star } from "lucide-react";

interface BookDetailRatingProps {
  rating?: number;
  reviewCount?: number;
}

export function BookDetailRating({ rating = 4.5, reviewCount = 1234 }: BookDetailRatingProps) {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <span className="text-blue-600 hover:text-blue-800 cursor-pointer text-sm">
        ({rating}) • {reviewCount.toLocaleString()} avaliações
      </span>
    </div>
  );
}
