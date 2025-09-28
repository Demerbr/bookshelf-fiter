import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, CartState, CartActions } from '@/types/cart';
import { Book } from '@/services/types/book';

interface CartStore extends CartState, CartActions {}

const getBookPrice = (book: Book): number => parseFloat(book.price);

const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
  return { totalItems, totalPrice };
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addItem: (book, quantity = 1) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(item => item.id === book.id);

        if (existingItem) {
          const updatedItems = currentItems.map(item =>
            item.id === book.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
          const { totalItems, totalPrice } = calculateTotals(updatedItems);
          set({ items: updatedItems, totalItems, totalPrice });
        } else {
          const newItem: CartItem = {
            id: book.id,
            book,
            quantity,
            unitPrice: getBookPrice(book),
            addedAt: new Date().toISOString()
          };
          const updatedItems = [...currentItems, newItem];
          const { totalItems, totalPrice } = calculateTotals(updatedItems);
          set({ items: updatedItems, totalItems, totalPrice });
        }
      },

      removeItem: (id) => {
        const currentItems = get().items;
        const updatedItems = currentItems.filter(item => item.id !== id);
        const { totalItems, totalPrice } = calculateTotals(updatedItems);
        set({ items: updatedItems, totalItems, totalPrice });
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }

        const currentItems = get().items;
        const updatedItems = currentItems.map(item =>
          item.id === id ? { ...item, quantity } : item
        );
        const { totalItems, totalPrice } = calculateTotals(updatedItems);
        set({ items: updatedItems, totalItems, totalPrice });
      },

      clearCart: () => {
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0
        });
      },

      isInCart: (id) => {
        return get().items.some(item => item.id === id);
      },

      getItemQuantity: (id) => {
        const item = get().items.find(item => item.id === id);
        return item ? item.quantity : 0;
      }
    }),
    {
      name: 'bookshelf-cart',
      version: 1
    }
  )
);

