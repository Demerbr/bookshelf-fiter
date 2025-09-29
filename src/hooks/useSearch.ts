import { useState, useCallback, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useBooksInfiniteQuery } from "@/queries";
import { Book } from "@/services/types/book";

const DEFAULT_LIMIT = 4;

type SortBy = 'name' | 'price' | 'date';
type SortOrder = 'ASC' | 'DESC';

export function useSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSearching, setIsSearching] = useState(false);

  const query = searchParams?.get('q') ?? '';
  const hasQuery = searchParams?.has('q');
  const sortBy = searchParams?.get('sortBy') as SortBy | null;
  const sortOrder = searchParams?.get('sortOrder') as SortOrder | null;

  const queryParams = useMemo(() => ({
    limit: DEFAULT_LIMIT,
    text: query || undefined,
    sortBy: sortBy || undefined,
    sortOrder: sortOrder || undefined,
  }), [query, sortBy, sortOrder]);

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

  const buildSearchUrl = useCallback((searchQuery: string, sortBy?: SortBy | null, sortOrder?: SortOrder | null) => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (sortBy) params.set('sortBy', sortBy);
    if (sortOrder) params.set('sortOrder', sortOrder);
    
    return params.toString() ? `/?${params.toString()}` : '/';
  }, []);

  const navigateToSearch = useCallback((searchQuery: string) => {
    const url = buildSearchUrl(searchQuery, sortBy, sortOrder);
    router.push(url, { scroll: false });
  }, [router, sortBy, sortOrder, buildSearchUrl]);

  const handleSearch = useCallback((newQuery: string) => {
    navigateToSearch(newQuery.trim());
  }, [navigateToSearch]);

  const clearSearch = useCallback(() => {
    router.push('/', { scroll: false });
  }, [router]);

  const handleSort = useCallback((newSortBy: SortBy, newSortOrder: SortOrder) => {
    const url = buildSearchUrl(query, newSortBy, newSortOrder);
    router.push(url, { scroll: false });
  }, [router, query, buildSearchUrl]);

  const isNotFound = useMemo(() => {
    return isSearching && 
           !isLoading && 
           !isError && 
           query.trim() !== "" &&
           allBooks.length === 0;
  }, [isSearching, isLoading, isError, query, allBooks.length]);

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
    isNotFound,
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
