import Link from "next/link";
import { useBookCardContext } from "./bookCardContext";

interface BookCardInfoProps {
  showAuthor?: boolean;
  showYear?: boolean;
  className?: string;
}

export function BookCardInfo({ showAuthor = true, showYear = true, className }: BookCardInfoProps) {
  const { book, publishedYear, authorsText } = useBookCardContext();
  
  return (
    <div className={`space-y-2 ${className || ''}`}>
      {/* Título */}
      <Link href={`/books/${book.id}`}>
        <h3 className="font-medium text-sm text-amazon-text line-clamp-2 hover:text-amazon-orange transition-colors leading-tight">
          {book.name}
        </h3>
      </Link>

      {/* Autor */}
      {showAuthor && (
        <p className="text-xs text-amazon-text-secondary line-clamp-1">
          por {authorsText}
        </p>
      )}

      {/* Ano de publicação */}
      {showYear && (
        <p className="text-xs text-amazon-text-light">
          {publishedYear}
        </p>
      )}
    </div>
  );
}
