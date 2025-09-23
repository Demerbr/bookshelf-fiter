import { createContext, useContext } from "react";

// Context para compartilhar estado entre componentes
export interface PaginationContextType {
  currentPage: number;
  hasMore: boolean;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

export const PaginationContext = createContext<PaginationContextType | undefined>(undefined);

// Hook para usar o contexto
export const usePaginationContext = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error('Pagination components must be used within Pagination');
  }
  return context;
};
