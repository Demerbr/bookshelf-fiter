"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, CircleX } from "lucide-react";
import { useTranslation } from 'react-i18next';

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
  placeholder,
  className = "",
  value = ""
}: SearchProps) => {
  const { t } = useTranslation();
  const [query, setQuery] = useState(value);
  const [, setDebouncedQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim() || "");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery("");
    if (onClear) {
      onClear();
    } else {
      onSearch("");
    }
  };

  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    if (value && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(value.length, value.length);
    }
  }, [value]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      onSearch(query);
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="h-10 flex w-full relative">
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder || t('search.placeholder')}
          value={query}
          onChange={handleInputChange}
          className="bg-white w-full rounded-r-none h-full border-amazon-border focus:border-amazon-orange focus:ring-amazon-orange pr-10 text-sm"
        />
        {query && (
          <CircleX 
            className="absolute right-10 top-1/2 -translate-y-1/2 w-4 h-4 text-amazon-text-light hover:text-amazon-text cursor-pointer z-10"
            onClick={handleClear}
            data-testid="clear-button"
          />
        )}
        <Button
          type="submit"
          className="h-full w-10 rounded-l-none rounded-r-md bg-amazon-orange hover:bg-amazon-orange-hover border-none flex items-center justify-center"
        >
          <Search className="w-4 h-4 text-white" />
        </Button>
      </div>
    </form>
  );
};
