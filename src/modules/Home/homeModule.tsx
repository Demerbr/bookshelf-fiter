"use client";

import { useSearch } from "@/hooks/useSearch";
import { ErrorState } from "./components/ErrorState";
import { LoadingState } from "./components/LoadingState";
import { ResultsCounter } from "./components/ResultsCounter";
import { BooksGrid } from "./components/BooksGrid";
import { PaginationWrapper } from "./components/PaginationWrapper";
import { EmptyState } from "./components/EmptyState";

export const HomeModule = () => {
  const { 
    searchResults, 
    isLoading, 
    isError, 
    error, 
    isNotFound,
    searchQuery 
  } = useSearch();

  const booksData = searchResults;

  if (isError) {
    return <ErrorState error={error || undefined} />;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <ResultsCounter 
          count={booksData?.data?.length} 
          isLoading={isLoading} 
        />

        {isLoading ? (
          <LoadingState />
        ) : (
          <>
            {booksData?.data && booksData.data.length > 0 && (
              <BooksGrid books={booksData.data} />
            )}

            {booksData && booksData.data && booksData.data.length > 0 && (
              <PaginationWrapper
                initialPage={1}
                hasMore={booksData.hasMore}
              />
            )}

            {isNotFound && (
              <div className="text-center py-8">
                <p className="text-gray-600 text-lg">
                  Nenhum livro encontrado para &quot;{searchQuery}&quot;
                </p>
              </div>
            )}

            {!isNotFound && booksData && booksData.data && booksData.data.length === 0 && (
              <EmptyState />
            )}
          </>
        )}
      </div>
    </div>
  );
};