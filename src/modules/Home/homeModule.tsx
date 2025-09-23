import { useBooksListQuery } from "@/queries";
import { BooksListResponse } from "@/services/types/book";
import { useState } from "react";
import { ErrorState } from "./components/ErrorState";
import { LoadingState } from "./components/LoadingState";
import { ResultsCounter } from "./components/ResultsCounter";
import { BooksGrid } from "./components/BooksGrid";
import { Pagination, PaginationPrevious, PaginationNext, PaginationIndicator } from "./components/Pagination";
import { EmptyState } from "./components/EmptyState";

export const HomeModule = () => {
    const [page, setPage] = useState(1);

    const { data, isLoading, isError, error } = useBooksListQuery({
      page,
      limit: 12,
    });
  
    const booksData = data as BooksListResponse | undefined;
  
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
                <Pagination
                  currentPage={page}
                  hasMore={booksData.hasMore}
                  onPreviousPage={() => setPage(p => p - 1)}
                  onNextPage={() => setPage(p => p + 1)}
                >
                  <PaginationPrevious />
                  <PaginationIndicator />
                  <PaginationNext />
                </Pagination>
              )}

              {booksData && booksData.data && booksData.data.length === 0 && (
                <EmptyState />
              )}
            </>
          )}
        </div>
      </div>
    );
};