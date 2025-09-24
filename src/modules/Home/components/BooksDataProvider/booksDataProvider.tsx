"use client";

import { useSearchContext } from "@/contexts/SearchContext";
import { ErrorState } from "../ErrorState";
import { LoadingState } from "../LoadingState";
import { ResultsCounter } from "../ResultsCounter";
import { BooksGrid } from "../BooksGrid";
import { PaginationWrapper } from "../PaginationWrapper";
import { EmptyState } from "../EmptyState";

export function BooksDataProvider() {
  const { 
    searchResults, 
    isLoading, 
    isError, 
    error, 
    isNotFound,
    searchQuery 
  } = useSearchContext();

  const booksData = searchResults;

  if (isError) {
    return <ErrorState error={error} />;
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
                  Nenhum livro encontrado para "{searchQuery}"
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
}