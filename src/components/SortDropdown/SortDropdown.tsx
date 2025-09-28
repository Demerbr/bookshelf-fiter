"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from 'react-i18next';

export type SortOption = {
  value: string;
  label: string;
  sortBy: 'name' | 'price' | 'date';
  sortOrder: 'ASC' | 'DESC';
};

const getSortOptions = (t: (key: string) => string): SortOption[] => [
  { value: 'name-asc', label: t('sort.nameAsc'), sortBy: 'name', sortOrder: 'ASC' },
  { value: 'name-desc', label: t('sort.nameDesc'), sortBy: 'name', sortOrder: 'DESC' },
  { value: 'price-asc', label: t('sort.priceAsc'), sortBy: 'price', sortOrder: 'ASC' },
  { value: 'price-desc', label: t('sort.priceDesc'), sortBy: 'price', sortOrder: 'DESC' },
  { value: 'date-asc', label: t('sort.dateAsc'), sortBy: 'date', sortOrder: 'ASC' },
  { value: 'date-desc', label: t('sort.dateDesc'), sortBy: 'date', sortOrder: 'DESC' },
];

interface SortDropdownProps {
  onSortChange: (sortBy: 'name' | 'price' | 'date', sortOrder: 'ASC' | 'DESC') => void;
  currentSort?: { sortBy: 'name' | 'price' | 'date'; sortOrder: 'ASC' | 'DESC' };
  className?: string;
}

export function SortDropdown({ onSortChange, currentSort, className = "" }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const sortOptions = getSortOptions(t);

  const getCurrentLabel = () => {
    if (!currentSort) return t('sort.placeholder');
    const option = sortOptions.find(
      opt => opt.sortBy === currentSort.sortBy && opt.sortOrder === currentSort.sortOrder
    );
    return option?.label || t('sort.placeholder');
  };

  const handleOptionClick = (option: SortOption) => {
    onSortChange(option.sortBy, option.sortOrder);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-sm bg-white border border-amazon-border rounded-md shadow-sm hover:bg-amazon-gray focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:border-amazon-orange transition-colors"
      >
        <span className="text-amazon-text">{getCurrentLabel()}</span>
        <ChevronDown 
          className={`w-4 h-4 text-amazon-text-light transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-amazon-border rounded-md shadow-lg z-20 max-h-60 overflow-y-auto">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-amazon-gray focus:outline-none focus:bg-amazon-gray transition-colors ${
                  currentSort?.sortBy === option.sortBy && currentSort?.sortOrder === option.sortOrder
                    ? 'bg-amazon-orange/10 text-amazon-orange font-medium'
                    : 'text-amazon-text'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
