"use client";

import { Header } from "./header";
import { useSearchContext } from "@/contexts/SearchContext";

export const HeaderWithSearch = () => {
  const { handleSearch, searchQuery, clearSearch } = useSearchContext();

  return <Header onSearch={handleSearch} onClear={clearSearch} searchValue={searchQuery} />;
};
