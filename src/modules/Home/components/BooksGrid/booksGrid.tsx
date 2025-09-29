"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Book } from "@/services/types/book";
import { BookCard, BookCardImage, BookCardInfo, BookCardRating, BookCardPrice, BookCardAction } from "@/components/BookCard";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { useFavorites } from "@/hooks/useFavorites";
import { useGridClassesWithCustom } from "@/hooks/useGridClasses";

interface BooksGridProps {
  books: Book[];
  className?: string;
}

export function BooksGrid({ books, className = "" }: BooksGridProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const router = useRouter();
  const gridClasses = useGridClassesWithCustom('books-grid', 'max-w-xl mx-auto px-1 sm:px-2 md:px-4');

  useEffect(() => {
    if (books.length > 0) {
      books.slice(0, 3).forEach(book => {
        router.prefetch(`/books/${book.id}`);
      });
    }
  }, [books, router]);

  return (
    <ErrorBoundary>
      <div className={`${gridClasses} ${className}`}>
        {books.map((book) => (
          <BookCard key={book.id} book={book}>
            <BookCardImage 
              onFavoriteClick={() => toggleFavorite(book)}
              isFavorite={isFavorite(book.id)}
            />
            <BookCardInfo />
            <BookCardRating />
            <BookCardPrice />
            <BookCardAction />
          </BookCard>
        ))}
      </div>
    </ErrorBoundary>
  );
}
