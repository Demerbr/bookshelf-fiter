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
    <header className="h-20 w-full justify-around bg-brand-dark flex items-center">
      <h1 className="text-white font-bold text-2xl">Bookshelf</h1>
      <SearchComponent 
        onSearch={handleSearch}
        onClear={clearSearch}
        placeholder="Pesquisar Amazon.com.br"
        value={searchQuery || ""}
      />
      
      <div className="flex items-center gap-4">
        <Link href="/favorites" className="relative">
          <Heart className="h-6 w-6 text-white hover:text-red-400 transition-colors" />
          {favoritesCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {favoritesCount}
            </span>
          )}
        </Link>
        
        <Link href="/cart" className="relative">
          <ShoppingCart className="h-6 w-6 text-white hover:text-yellow-400 transition-colors" />
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