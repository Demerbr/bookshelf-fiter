"use client";

import { SearchComponent } from "@/components/Search";
import { useSearch } from "@/hooks/useSearch";

export const Header = () => {
  const { handleSearch, searchQuery, clearSearch } = useSearch();

  return (
    <header className="h-20 w-full justify-around bg-brand-dark flex items-center">
      <h1 className="text-white font-bold text-2xl">Bookshelf</h1>
      <SearchComponent 
        onSearch={handleSearch}
        onClear={clearSearch}
        placeholder="Pesquisar Amazon.com.br"
        value={searchQuery || ""}
      />
    </header>
  );
};