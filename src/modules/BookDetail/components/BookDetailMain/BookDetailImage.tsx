import { OptimizedImage } from "@/components/ui/optimized-image";
import { useBookDetailContext } from "../BookDetailContext";

export function BookDetailImage() {
  const { book, cleanImageUrl } = useBookDetailContext();
  
  return (
    <div className="space-y-4">
      <div className="aspect-[2/3] overflow-hidden rounded-lg bg-gray-100">
        {cleanImageUrl ? (
          <OptimizedImage 
            src={cleanImageUrl} 
            alt={book.name}
            width={400}
            height={600}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-500 text-lg">Sem capa disponível</span>
          </div>
        )}
      </div>
      
      {/* Miniaturas (simuladas) */}
      <div className="flex space-x-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-16 h-20 bg-gray-200 rounded border-2 border-transparent hover:border-blue-500 cursor-pointer"></div>
        ))}
      </div>
    </div>
  );
}
