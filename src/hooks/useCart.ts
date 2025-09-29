import { useCartStore } from '@/stores/useCartStore';
import { Book } from '@/services/types/book';

export const useCart = () => {
  const {
    items,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    isInCart,
    getItemQuantity
  } = useCartStore();

  const addBookToCart = (book: Book, quantity: number = 1) => {
    addItem(book, quantity);
  };

  const removeBookFromCart = (bookId: string) => {
    removeItem(bookId);
  };

  const updateBookQuantity = (bookId: string, quantity: number) => {
    updateQuantity(bookId, quantity);
  };

  const formatPrice = (price: number): string => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  };

  const formatTotalPrice = (): string => {
    return formatPrice(totalPrice);
  };

  const getItemTotalPrice = (itemId: string): string => {
    const item = items.find(item => item.id === itemId);
    if (!item) return 'R$ 0,00';
    return formatPrice(item.unitPrice * item.quantity);
  };

  return {
    cartItems: items,
    totalItems,
    totalPrice,
    isEmpty: items.length === 0,
    addBookToCart,
    removeBookFromCart,
    updateBookQuantity,
    clearCart,
    isInCart,
    getItemQuantity,
    formatPrice,
    formatTotalPrice,
    getItemTotalPrice
  };
};

