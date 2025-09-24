"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, CircleX } from "lucide-react";

interface SearchProps {
  onSearch: (query: string) => void;
  onClear?: () => void;
  placeholder?: string;
  className?: string;
  value?: string;
}

const DEBOUNCE_DELAY = 500;

export const SearchComponent = ({ 
  onSearch, 
  onClear,
  placeholder = "Pesquisar Amazon.com.br",
  className = "",
  value = ""
}: SearchProps) => {
  const [query, setQuery] = useState(value);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const syncWithExternalValue = () => {
    setQuery(value);
  };

  const focusAndPositionCursor = () => {
    if (!hasValue() || !hasInputRef()) return;
    
    focusInput();
    positionCursorAtEnd();
  };

  const debounceSearch = () => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      onSearch(query);
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(timer);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    onSearch(trimmedQuery || "");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery("");
    executeClearAction();
  };

  const hasValue = () => Boolean(value);
  const hasInputRef = () => Boolean(inputRef.current);
  const focusInput = () => inputRef.current?.focus();
  const positionCursorAtEnd = () => {
    const length = value.length;
    inputRef.current?.setSelectionRange(length, length);
  };
  const executeClearAction = () => {
    if (onClear) {
      onClear();
    } else {
      onSearch("");
    }
  };

  useEffect(syncWithExternalValue, [value]);
  useEffect(focusAndPositionCursor, [value]);
  useEffect(debounceSearch, [query, onSearch]);

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="h-12 gap-0 flex w-fit relative">
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
          className="bg-white w-64 rounded-r-none h-full border-none pr-10"
        />
        {query && (
          <CircleX 
            className="absolute right-12 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer z-10"
            onClick={handleClear}
          />
        )}
        <Button
          type="submit"
          className="h-full w-12 rounded-l-none rounded-r-md border-none flex items-center justify-center"
        >
          <Search />
        </Button>
      </div>
    </form>
  );
};
