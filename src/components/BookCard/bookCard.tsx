"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { Book } from "@/services/types/book";
import { BookCardContext } from "./bookCardContext";

interface BookCardProps {
  book: Book;
  children: ReactNode;
  className?: string;
}

export function BookCard({ book, children, className }: BookCardProps) {
  // Extrair ano da data de publicação
  const publishedYear = new Date(book.publishedat).getFullYear();
  
  // Formatar autores (múltiplos autores)
  const authorsText = book.authors.length > 1 
    ? book.authors.join(', ') 
    : book.authors[0];

  // Limpar URL da imagem (remover caracteres extras)
  const cleanImageUrl = book.imagelink?.replace(/\]$/, '') || '';

  const contextValue = {
    book,
    publishedYear,
    authorsText,
    cleanImageUrl
  };

  return (
    <BookCardContext.Provider value={contextValue}>
      <Link 
        href={`/books/${book.id}`}
        prefetch={true}
        className={`block bg-white border border-amazon-border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-4 group hover:border-amazon-orange/30 ${className || ''}`}
      >
        {children}
      </Link>
    </BookCardContext.Provider>
  );
}
