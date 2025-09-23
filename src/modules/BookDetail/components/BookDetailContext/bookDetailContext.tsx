import { createContext, useContext } from "react";
import { Book } from "@/services/types/book";

export interface BookDetailContextType {
  book: Book;
  publishedYear: number;
  authorsText: string;
  cleanImageUrl: string;
}

export const BookDetailContext = createContext<BookDetailContextType | undefined>(undefined);

export const useBookDetailContext = () => {
  const context = useContext(BookDetailContext);
  if (!context) {
    throw new Error('BookDetail components must be used within BookDetailContent');
  }
  return context;
};
