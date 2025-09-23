"use client";

import { useState } from "react";
import { Pagination, PaginationPrevious, PaginationNext, PaginationIndicator } from "../Pagination";

interface PaginationWrapperProps {
  initialPage: number;
  hasMore: boolean;
}

export function PaginationWrapper({ initialPage, hasMore }: PaginationWrapperProps) {
  const [page, setPage] = useState(initialPage);

  return (
    <Pagination
      currentPage={page}
      hasMore={hasMore}
      onPreviousPage={() => setPage(p => p - 1)}
      onNextPage={() => setPage(p => p + 1)}
    >
      <PaginationPrevious />
      <PaginationIndicator />
      <PaginationNext />
    </Pagination>
  );
}
