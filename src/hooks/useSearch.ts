import { useState, useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useBooksListQuery } from "@/queries";
import { BooksParams } from "@/services/types/book";

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 4;

export function useSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSearching, setIsSearching] = useState(false);

  const query = searchParams?.get('q') ?? '';
  const hasQuery = searchParams?.has('q');
  const sortBy = searchParams?.get('sortBy') as 'name' | 'price' | 'date' | null;
  const sortOrder = searchParams?.get('sortOrder') as 'ASC' | 'DESC' | null;

  const updateSearchingState = () => {
    setIsSearching(query.trim() !== "");
  };

  const buildQueryParams = (): BooksParams => ({
    page: DEFAULT_PAGE,
    limit: DEFAULT_LIMIT,
    text: query || undefined,
    sortBy: sortBy || undefined,
    sortOrder: sortOrder || undefined,
  });

  const queryParams = buildQueryParams();
  const { data, isLoading, isError, error, refetch } = useBooksListQuery(queryParams);

  const navigateToSearch = (searchQuery: string) => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (sortBy) params.set('sortBy', sortBy);
    if (sortOrder) params.set('sortOrder', sortOrder);
    
    const url = params.toString() ? `/?${params.toString()}` : '/';
    router.push(url, { scroll: false });
  };

  const handleSearch = useCallback((newQuery: string) => {
    const trimmedQuery = newQuery.trim();
    navigateToSearch(trimmedQuery);
  }, [router]);

  const clearSearch = useCallback(() => {
    router.push('/', { scroll: false });
  }, [router]);

  const handleSort = useCallback((newSortBy: 'name' | 'price' | 'date', newSortOrder: 'ASC' | 'DESC') => {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    params.set('sortBy', newSortBy);
    params.set('sortOrder', newSortOrder);
    
    const url = `/?${params.toString()}`;
    router.push(url, { scroll: false });
  }, [router, query]);

  const isNotFound = () => {
    return isSearching && 
           !isLoading && 
           !isError && 
           query.trim() !== "" &&
           data?.data?.length === 0;
  };

  useEffect(updateSearchingState, [query]);

  return {
    searchQuery: query,
    handleSearch,
    clearSearch,
    handleSort,
    currentSort: sortBy && sortOrder ? { sortBy, sortOrder } : undefined,
    isSearching,
    isNotFound: isNotFound(),
    searchResults: data,
    isLoading,
    isError,
    error,
    refetch,
    hasQuery,
  };
}
