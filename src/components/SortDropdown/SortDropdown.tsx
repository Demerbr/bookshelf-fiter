"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type SortOption = {
  value: string;
  label: string;
  sortBy: 'name' | 'price' | 'date';
  sortOrder: 'ASC' | 'DESC';
};

const sortOptions: SortOption[] = [
  { value: 'name-asc', label: 'Nome A-Z', sortBy: 'name', sortOrder: 'ASC' },
  { value: 'name-desc', label: 'Nome Z-A', sortBy: 'name', sortOrder: 'DESC' },
  { value: 'price-asc', label: 'Preço: Menor para Maior', sortBy: 'price', sortOrder: 'ASC' },
  { value: 'price-desc', label: 'Preço: Maior para Menor', sortBy: 'price', sortOrder: 'DESC' },
  { value: 'date-asc', label: 'Data: Mais Antigo', sortBy: 'date', sortOrder: 'ASC' },
  { value: 'date-desc', label: 'Data: Mais Recente', sortBy: 'date', sortOrder: 'DESC' },
];

interface SortDropdownProps {
  onSortChange: (sortBy: 'name' | 'price' | 'date', sortOrder: 'ASC' | 'DESC') => void;
  currentSort?: { sortBy: 'name' | 'price' | 'date'; sortOrder: 'ASC' | 'DESC' };
  className?: string;
}

export function SortDropdown({ onSortChange, currentSort, className = "" }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getCurrentLabel = () => {
    if (!currentSort) return 'Ordenar por...';
    const option = sortOptions.find(
      opt => opt.sortBy === currentSort.sortBy && opt.sortOrder === currentSort.sortOrder
    );
    return option?.label || 'Ordenar por...';
  };

  const handleOptionClick = (option: SortOption) => {
    onSortChange(option.sortBy, option.sortOrder);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <span className="text-gray-700">{getCurrentLabel()}</span>
        <ChevronDown 
          className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <>
          {/* Overlay para fechar o dropdown */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown menu */}
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-20 max-h-60 overflow-y-auto">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ${
                  currentSort?.sortBy === option.sortBy && currentSort?.sortOrder === option.sortOrder
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700'
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
