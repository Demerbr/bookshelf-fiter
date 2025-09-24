"use client";

import { createContext, useContext, ReactNode } from "react";
import { useSearch } from "@/hooks/useSearch";

interface SearchContextType {
  searchQuery: string;
  handleSearch: (query: string) => void;
  clearSearch: () => void;
  isSearching: boolean;
  isNotFound: boolean;
  searchResults: any;
  isLoading: boolean;
  isError: boolean;
  error: any;
  refetch: () => void;
  hasQuery: boolean;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

interface SearchProviderProps {
  children: ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const searchHook = useSearch();

  return (
    <SearchContext.Provider value={searchHook}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
}

