"use client";

import { useSearch } from "@/hooks/useSearch";
import { ErrorState } from "./components/ErrorState";
import { LoadingState } from "./components/LoadingState";
import { ResultsCounter } from "./components/ResultsCounter";
import { BooksGrid } from "./components/BooksGrid";
import { EmptyState } from "./components/EmptyState";
import { SortDropdown } from "@/components/SortDropdown";
import { InfiniteScrollWrapper } from "@/components/InfiniteScrollWrapper";

export const HomeModule = () => {
  const { 
    allBooks,
    isLoading, 
    isError, 
    error, 
    isNotFound,
    searchQuery,
    handleSort,
    currentSort,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useSearch();

  if (isError) {
    return <ErrorState error={error || undefined} />;
  }

  return (
    <div className="bg-gray-50 flex-1 w-full">
      <div className="container mx-auto px-1 sm:px-2 md:px-4 lg:px-6 xl:px-8 py-1 sm:py-2 md:py-4 lg:py-6 xl:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <ResultsCounter 
            count={allBooks.length} 
            isLoading={isLoading} 
          />
          
          {allBooks.length > 0 && (
            <div className="w-full sm:w-auto">
              <SortDropdown 
                onSortChange={handleSort}
                currentSort={currentSort}
                className="w-full sm:w-64"
              />
            </div>
          )}
        </div>

        {isLoading ? (
          <LoadingState />
        ) : (
          <>
            {allBooks.length > 0 && (
              <InfiniteScrollWrapper
                hasNextPage={hasNextPage}
                isFetchingNextPage={isFetchingNextPage}
                fetchNextPage={fetchNextPage}
                threshold={200}
              >
                <BooksGrid books={allBooks} className="mb-8" />
              </InfiniteScrollWrapper>
            )}

            {isNotFound && (
              <div className="text-center py-8">
                <p className="text-gray-600 text-lg">
                  Nenhum livro encontrado para &quot;{searchQuery}&quot;
                </p>
              </div>
            )}

            {!isNotFound && allBooks.length === 0 && (
              <EmptyState />
            )}
          </>
        )}
      </div>
    </div>
  );
};