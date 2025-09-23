"use client";

import { useBooksListQuery } from "@/queries";
import { BooksListResponse } from "@/services/types/book";

interface BooksDataProps {
  children: (data: {
    booksData: BooksListResponse | undefined;
    isLoading: boolean;
    isError: boolean;
    error: Error | undefined;
  }) => React.ReactNode;
}

export function BooksData({ children }: BooksDataProps) {
  const { data, isLoading, isError, error } = useBooksListQuery({
    page: 1,
    limit: 12,
  });

  const booksData = data as BooksListResponse | undefined;

  return (
    <>
      {children({
        booksData,
        isLoading,
        isError,
        error: error as Error | undefined,
      })}
    </>
  );
}
