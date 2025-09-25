import { Book } from '@/services/types/book';

export interface CartItem {
  id: string;           // ID do livro
  book: Book;           // Dados completos do livro
  quantity: number;     // Quantidade no carrinho
  unitPrice: number;    // Preço unitário
  addedAt: string;      // Data que foi adicionado
}

export interface CartState {
  items: CartItem[];
  totalItems: number;   // Total de itens (soma das quantidades)
  totalPrice: number;   // Preço total
}

export interface CartActions {
  addItem: (book: Book, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  isInCart: (id: string) => boolean;
  getItemQuantity: (id: string) => number;
}

