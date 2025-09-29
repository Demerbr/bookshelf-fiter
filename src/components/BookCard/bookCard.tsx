"use client";

import { ReactNode } from "react";
import { Book } from "@/services/types/book";
import { BookCardContext } from "./bookCardContext";

interface BookCardProps {
  book: Book;
  children: ReactNode;
  className?: string;
}

const formatAuthors = (authors: string[]): string => {
  return authors.length > 1 ? authors.join(', ') : authors[0];
};

const cleanImageUrl = (url: string): string => {
  return url?.replace(/\]$/, '') || '';
};

export function BookCard({ book, children, className }: BookCardProps) {
  const publishedYear = new Date(book.publishedat).getFullYear();
  const authorsText = formatAuthors(book.authors);
  const cleanImage = cleanImageUrl(book.imagelink);

  const contextValue = {
    book,
    publishedYear,
    authorsText,
    cleanImageUrl: cleanImage
  };

  return (
    <BookCardContext.Provider value={contextValue}>
      <div className={`bg-white border border-amazon-border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-4 group hover:border-amazon-orange/30 ${className || ''}`}>
        {children}
      </div>
    </BookCardContext.Provider>
  );
}
