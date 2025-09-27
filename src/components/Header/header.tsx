"use client";

import { SearchComponent } from "@/components/Search";
import { useSearch } from "@/hooks/useSearch";
import { useFavorites } from "@/hooks/useFavorites";
import { useCart } from "@/hooks/useCart";
import { Heart, ShoppingCart, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from '@/components/LanguageSelector';

export const Header = () => {
  const { handleSearch, searchQuery, clearSearch } = useSearch();
  const { favoritesCount } = useFavorites();
  const { totalItems } = useCart();
  const { t } = useTranslation();

  return (
    <header className="h-24 w-full bg-amazon-dark flex items-center justify-between px-4 lg:px-6 shadow-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
        <Image
          src="/Bookshelf-logo.png"
          alt="Bookshelf"
          width={420}
          height={140}
          className="h-28 w-auto lg:h-36"
          priority
        />
      </Link>
      
      {/* Search Bar */}
      <div className="flex-1 max-w-2xl mx-4">
        <SearchComponent 
          onSearch={handleSearch}
          onClear={clearSearch}
          placeholder={t('header.searchPlaceholder')}
          value={searchQuery || ""}
          className="w-full"
        />
      </div>
      
      {/* Navigation Icons - Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <LanguageSelector />
        <Link href="/favorites" className="relative p-2 text-white hover:text-amazon-orange transition-colors group">
          <Heart className="h-6 w-6" />
          {favoritesCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-amazon-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
              {favoritesCount}
            </span>
          )}
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-amazon-dark text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {t('header.favorites')}
          </span>
        </Link>
        
        <Link href="/cart" className="relative p-2 text-white hover:text-amazon-orange transition-colors group">
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-amazon-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
              {totalItems}
            </span>
          )}
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-amazon-dark text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {t('header.cart')}
          </span>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:text-amazon-orange hover:bg-amazon-dark-light">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-white">
            <SheetHeader>
              <SheetTitle className="text-amazon-text text-left">{t('header.menu')}</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-4">
              <div className="p-3">
                <LanguageSelector />
              </div>
              <Link href="/favorites" className="flex items-center gap-3 p-3 rounded-lg hover:bg-amazon-gray transition-colors">
                <div className="relative">
                  <Heart className="h-6 w-6 text-amazon-text" />
                  {favoritesCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-amazon-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                      {favoritesCount}
                    </span>
                  )}
                </div>
                <span className="text-amazon-text font-medium">{t('header.favorites')}</span>
              </Link>
              
              <Link href="/cart" className="flex items-center gap-3 p-3 rounded-lg hover:bg-amazon-gray transition-colors">
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 text-amazon-text" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-amazon-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                      {totalItems}
                    </span>
                  )}
                </div>
                <span className="text-amazon-text font-medium">{t('header.cart')}</span>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};