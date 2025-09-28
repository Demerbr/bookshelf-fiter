"use client";

import { ReactNode } from "react";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { LoadingProviderClient } from "@/components/LoadingProvider";

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
            <LoadingProviderClient 
              message="loading.moreBooks" 
              size="md" 
            />
          )}
        </div>
      )}
    </>
  );
}