"use client";

import { ReactNode } from "react";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { ModernLoading } from "../ui";

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
      
      <div ref={sentinelRef} className="h-4" />
      
      {isFetchingNextPage && (
        <div className="flex justify-center items-center py-8">
          {loadingComponent || (
            <div className="flex items-center space-x-2">
              <ModernLoading message="" size='sm' />
              <span className="text-gray-600">Carregando mais livros...</span>
            </div>
          )}
        </div>
      )}
    </>
  );
}
