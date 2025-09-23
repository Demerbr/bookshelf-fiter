import { ReactNode } from "react";
import { PaginationContext } from "./paginationContext";

interface PaginationProps {
  currentPage: number;
  hasMore: boolean;
  onPreviousPage: () => void;
  onNextPage: () => void;
  children: ReactNode;
}

export function Pagination({ 
  currentPage, 
  hasMore, 
  onPreviousPage, 
  onNextPage,
  children 
}: PaginationProps) {
  return (
    <PaginationContext.Provider value={{ currentPage, hasMore, onPreviousPage, onNextPage }}>
      <div className="flex justify-center items-center gap-4">
        {children}
      </div>
    </PaginationContext.Provider>
  );
}
