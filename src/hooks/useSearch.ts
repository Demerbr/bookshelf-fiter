import { useState, useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useBooksListQuery } from "@/queries";
import { BooksParams } from "@/services/types/book";

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 12;

export function useSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSearching, setIsSearching] = useState(false);

  const query = searchParams?.get('q') ?? '';
  const hasQuery = searchParams?.has('q');

  const updateSearchingState = () => {
    setIsSearching(query.trim() !== "");
  };

  const buildQueryParams = (): BooksParams => ({
    page: DEFAULT_PAGE,
    limit: DEFAULT_LIMIT,
    text: query || undefined,
  });

  const queryParams = buildQueryParams();
  const { data, isLoading, isError, error, refetch } = useBooksListQuery(queryParams);

  const navigateToSearch = (searchQuery: string) => {
    const url = searchQuery ? `/?q=${encodeURIComponent(searchQuery)}` : '/';
    router.push(url, { scroll: false });
  };

  const handleSearch = useCallback((newQuery: string) => {
    const trimmedQuery = newQuery.trim();
    navigateToSearch(trimmedQuery);
  }, [router]);

  const clearSearch = useCallback(() => {
    router.push('/', { scroll: false });
  }, [router]);

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
