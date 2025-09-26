"use client";

import { ReactNode } from "react";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

interface InfiniteScrollWrapperProps {
  children: ReactNode;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  fetchNextPage: () => void;
  threshold?: number;
  loadingComponent?: ReactNode;
}

export function InfiniteScrollWrapper({
  children,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  threshold = 200,
  loadingComponent,
}: InfiniteScrollWrapperProps) {
  const { sentinelRef } = useInfiniteScroll({
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    threshold,
  });

  return (
    <>
      {children}
      
      {/* Sentinel element para detectar quando o usuário chega ao final */}
      <div ref={sentinelRef} className="h-4" />
      
      {/* Loading indicator quando está carregando mais páginas */}
      {isFetchingNextPage && (
        <div className="flex justify-center items-center py-8">
          {loadingComponent || (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span className="text-gray-600">Carregando mais livros...</span>
            </div>
          )}
        </div>
      )}
    </>
  );
}
