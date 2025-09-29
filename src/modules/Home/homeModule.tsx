"use client";

import { useSearch } from "@/hooks/useSearch";
import { ErrorState } from "./components/ErrorState";
// import { LoadingState } from "./components/LoadingState";
import { ResultsCounter } from "./components/ResultsCounter";
import { BooksGrid } from "./components/BooksGrid";
import { EmptyState } from "./components/EmptyState";
import { SortDropdown } from "@/components/SortDropdown";
import { InfiniteScrollWrapper } from "@/components/InfiniteScrollWrapper";
import { LoadingProviderClient } from "@/components/LoadingProvider";

export function HomeModule() {
  const {
    allBooks,
    isLoading,
    error,
    searchQuery,
    handleSearch,
    currentSort,
    handleSort,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useSearch();

  if (error) {
    return <ErrorState error={error} />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
          <div className="flex-1 w-full sm:w-auto">
            <SortDropdown currentSort={currentSort} onSortChange={handleSort} />
          </div>
        </div>

        {!isLoading && allBooks.length > 0 && (
          <div className="mb-6">
            <ResultsCounter 
              count={allBooks.length} 
              isLoading={isLoading}
            />
          </div>
        )}
      </div>

      {isLoading ? (
        <div data-testid="loading-state" className="min-h-[400px] flex flex-col items-center justify-center px-4">
          <LoadingProviderClient 
            message="loading.books" 
            size="xl" 
          />
        </div>
      ) : (
        <>
          {allBooks.length > 0 && (
            <InfiniteScrollWrapper
              hasNextPage={hasNextPage}
              isFetchingNextPage={isFetchingNextPage}
              fetchNextPage={fetchNextPage}
            >
              <BooksGrid books={allBooks} />
            </InfiniteScrollWrapper>
          )}

          {allBooks.length === 0 && !isLoading && (
            <EmptyState 
              searchQuery={searchQuery}
              onClearSearch={() => handleSearch('')}
            />
          )}
        </>
      )}
    </div>
  );
}