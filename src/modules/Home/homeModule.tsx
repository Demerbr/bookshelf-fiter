"use client";

import { useSearch } from "@/hooks/useSearch";
import { ErrorState } from "./components/ErrorState";
import { LoadingState } from "./components/LoadingState";
import { ResultsCounter } from "./components/ResultsCounter";
import { BooksGrid } from "./components/BooksGrid";
import { EmptyState } from "./components/EmptyState";
import { SortDropdown } from "@/components/SortDropdown";
import { InfiniteScrollWrapper } from "@/components/InfiniteScrollWrapper";
import { useTranslation } from 'react-i18next';
import { ModernLoading } from "@/components/ui";

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
  
  const { t } = useTranslation();

  if (isError) {
    return <ErrorState error={error || undefined} />;
  }

  return (
    <div className="bg-amazon-gray-light flex-1 w-full min-h-screen">
      <div className="container mx-auto px-4 lg:px-6 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
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
          <div className="flex flex-col gap-12">

          <ModernLoading />
          <LoadingState />
          </div>
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
              <div className="text-center py-12">
                <div className="bg-white rounded-lg shadow-sm border border-amazon-border p-8 max-w-md mx-auto">
                  <p className="text-amazon-text-secondary text-lg mb-2">
                    {t('search.noBooksFound')}
                  </p>
                  <p className="text-amazon-text-light">
                    {t('search.forQuery', { query: searchQuery })}
                  </p>
                </div>
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