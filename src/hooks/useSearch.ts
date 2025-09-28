import { useState, useCallback, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useBooksInfiniteQuery } from "@/queries";
import { Book } from "@/services/types/book";

const DEFAULT_LIMIT = 4;

export function useSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSearching, setIsSearching] = useState(false);

  const query = searchParams?.get('q') ?? '';
  const hasQuery = searchParams?.has('q');
  const sortBy = searchParams?.get('sortBy') as 'name' | 'price' | 'date' | null;
  const sortOrder = searchParams?.get('sortOrder') as 'ASC' | 'DESC' | null;

  const queryParams = {
    limit: DEFAULT_LIMIT,
    text: query || undefined,
    sortBy: sortBy || undefined,
    sortOrder: sortOrder || undefined,
  };

  const { 
    data, 
    isLoading, 
    isError, 
    error, 
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useBooksInfiniteQuery(queryParams);

  const allBooks = useMemo(() => {
    return data?.pages.flatMap((page: { data: Book[] }) => page.data) || [];
  }, [data]);

  const navigateToSearch = useCallback((searchQuery: string) => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (sortBy) params.set('sortBy', sortBy);
    if (sortOrder) params.set('sortOrder', sortOrder);
    
    const url = params.toString() ? `/?${params.toString()}` : '/';
    router.push(url, { scroll: false });
  }, [router, sortBy, sortOrder]);

  const handleSearch = useCallback((newQuery: string) => {
    navigateToSearch(newQuery.trim());
  }, [navigateToSearch]);

  const clearSearch = useCallback(() => {
    router.push('/', { scroll: false });
  }, [router]);

  const handleSort = useCallback((newSortBy: 'name' | 'price' | 'date', newSortOrder: 'ASC' | 'DESC') => {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    params.set('sortBy', newSortBy);
    params.set('sortOrder', newSortOrder);
    
    router.push(`/?${params.toString()}`, { scroll: false });
  }, [router, query]);

  const isNotFound = () => {
    return isSearching && 
           !isLoading && 
           !isError && 
           query.trim() !== "" &&
           allBooks.length === 0;
  };

  useEffect(() => {
    setIsSearching(query.trim() !== "");
  }, [query]);

  return {
    searchQuery: query,
    handleSearch,
    clearSearch,
    handleSort,
    currentSort: sortBy && sortOrder ? { sortBy, sortOrder } : undefined,
    isSearching,
    isNotFound: isNotFound(),
    searchResults: { data: allBooks, hasMore: hasNextPage },
    allBooks,
    isLoading,
    isError,
    error,
    refetch,
    hasQuery,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
}
