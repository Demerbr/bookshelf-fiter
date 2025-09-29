"use client";

import { createContext, useContext } from "react";
import { Book } from "@/services/types/book";

export interface BookCardContextType {
  book: Book;
  publishedYear: number;
  authorsText: string;
  cleanImageUrl: string;
}

export const BookCardContext = createContext<BookCardContextType | undefined>(undefined);

export const useBookCardContext = () => {
  const context = useContext(BookCardContext);
  if (!context) {
    throw new Error('BookCard components must be used within BookCard');
  }
  return context;
};
