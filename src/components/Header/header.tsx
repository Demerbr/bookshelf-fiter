"use client";

import { SearchComponent } from "@/components/Search";
import { useSearch } from "@/hooks/useSearch";
import { useFavorites } from "@/hooks/useFavorites";
import { useCart } from "@/hooks/useCart";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  const { handleSearch, searchQuery, clearSearch } = useSearch();
  const { favoritesCount } = useFavorites();
  const { totalItems } = useCart();

  return (
    <header className="h-14 sm:h-16 md:h-20 w-full bg-brand-dark flex items-center justify-between px-1 sm:px-2 md:px-4 lg:px-6">
      <h1 className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Bookshelf</h1>
      <SearchComponent 
        onSearch={handleSearch}
        onClear={clearSearch}
        placeholder="Pesquisar Amazon.com.br"
        value={searchQuery || ""}
      />
      
      <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2 lg:gap-3 xl:gap-4">
        <Link href="/favorites" className="relative">
          <Heart className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-5 lg:w-5 xl:h-6 xl:w-6 text-white hover:text-red-400 transition-colors" />
          {favoritesCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {favoritesCount}
            </span>
          )}
        </Link>
        
        <Link href="/cart" className="relative">
          <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-5 lg:w-5 xl:h-6 xl:w-6 text-white hover:text-yellow-400 transition-colors" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-gray-900 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};