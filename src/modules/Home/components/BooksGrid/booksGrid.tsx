"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Book } from "@/services/types/book";
import { BookCard, BookCardImage, BookCardInfo, BookCardRating, BookCardPrice, BookCardAction } from "@/components/BookCard";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { useFavorites } from "@/hooks/useFavorites";

interface BooksGridProps {
  books: Book[];
  className?: string;
}

export function BooksGrid({ books, className = "" }: BooksGridProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const router = useRouter();

  useEffect(() => {
    if (books.length > 0) {
      books.slice(0, 3).forEach(book => {
        router.prefetch(`/books/${book.id}`);
      });
    }
  }, [books, router]);

  return (
    <ErrorBoundary>
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 md:gap-4 max-w-xl mx-auto px-1 sm:px-2 md:px-4 ${className}`}>
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
