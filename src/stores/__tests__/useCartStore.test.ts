import { act, renderHook } from '@testing-library/react'
import { useCartStore } from '../useCartStore'
import { Book } from '@/services/types/book'

const mockBook: Book = {
  id: '1',
  name: 'Test Book',
  authors: ['Author 1'],
  description: 'Test description',
  imagelink: 'test-image.jpg',
  publishedat: '2023-01-01',
  createdat: '2023-01-01',
  searchable: 'test book author',
  price: '29.90'
}

const mockBook2: Book = {
  id: '2',
  name: 'Test Book 2',
  authors: ['Author 2'],
  description: 'Test description 2',
  imagelink: 'test-image-2.jpg',
  publishedat: '2023-02-01',
  createdat: '2023-02-01',
  searchable: 'test book 2 author',
  price: '39.90'
}

const renderHookWithStore = () => {
  return renderHook(() => useCartStore())
}

describe('useCartStore', () => {
  beforeEach(() => {
    useCartStore.getState().clearCart()
  })

  describe('Initial State', () => {
    it('should have empty initial state', () => {
      const { result } = renderHookWithStore()

      expect(result.current.items).toEqual([])
      expect(result.current.totalItems).toBe(0)
      expect(result.current.totalPrice).toBe(0)
    })
  })

  describe('Add Item', () => {
    it('should add new item to cart', () => {
      const { result } = renderHookWithStore()

      act(() => {
        result.current.addItem(mockBook, 2)
      })

      expect(result.current.items).toHaveLength(1)
      expect(result.current.items[0]).toMatchObject({
        id: mockBook.id,
        book: mockBook,
        quantity: 2,
        unitPrice: 29.90
      })
      expect(result.current.totalItems).toBe(2)
      expect(result.current.totalPrice).toBe(59.80)
    })

    it('should add item with default quantity of 1', () => {
      const { result } = renderHookWithStore()

      act(() => {
        result.current.addItem(mockBook)
      })

      expect(result.current.items[0].quantity).toBe(1)
      expect(result.current.totalItems).toBe(1)
      expect(result.current.totalPrice).toBe(29.90)
    })

    it('should increment quantity when adding existing item', () => {
      const { result } = renderHookWithStore()

      act(() => {
        result.current.addItem(mockBook, 2)
        result.current.addItem(mockBook, 3)
      })

      expect(result.current.items).toHaveLength(1)
      expect(result.current.items[0].quantity).toBe(5)
      expect(result.current.totalItems).toBe(5)
      expect(result.current.totalPrice).toBe(149.50)
    })

    it('should handle multiple different items', () => {
      const { result } = renderHookWithStore()

      act(() => {
        result.current.addItem(mockBook, 2)
        result.current.addItem(mockBook2, 1)
      })

      expect(result.current.items).toHaveLength(2)
      expect(result.current.totalItems).toBe(3)
      expect(result.current.totalPrice).toBeCloseTo(99.70, 2)
    })
  })

  describe('Remove Item', () => {
    it('should remove item from cart', () => {
      const { result } = renderHookWithStore()

      act(() => {
        result.current.addItem(mockBook, 2)
        result.current.addItem(mockBook2, 1)
        result.current.removeItem(mockBook.id)
      })

      expect(result.current.items).toHaveLength(1)
      expect(result.current.items[0].id).toBe(mockBook2.id)
      expect(result.current.totalItems).toBe(1)
      expect(result.current.totalPrice).toBe(39.90)
    })

    it('should handle removing non-existent item', () => {
      const { result } = renderHookWithStore()

      act(() => {
        result.current.addItem(mockBook, 2)
        result.current.removeItem('non-existent')
      })

      expect(result.current.items).toHaveLength(1)
      expect(result.current.totalItems).toBe(2)
      expect(result.current.totalPrice).toBe(59.80)
    })
  })

  describe('Update Quantity', () => {
    it('should update item quantity', () => {
      const { result } = renderHookWithStore()

      act(() => {
        result.current.addItem(mockBook, 2)
        result.current.updateQuantity(mockBook.id, 5)
      })

      expect(result.current.items[0].quantity).toBe(5)
      expect(result.current.totalItems).toBe(5)
      expect(result.current.totalPrice).toBe(149.50)
    })

    it('should remove item when quantity is set to 0', () => {
      const { result } = renderHookWithStore()

      act(() => {
        result.current.addItem(mockBook, 2)
        result.current.updateQuantity(mockBook.id, 0)
      })

      expect(result.current.items).toHaveLength(0)
      expect(result.current.totalItems).toBe(0)
      expect(result.current.totalPrice).toBe(0)
    })

    it('should remove item when quantity is negative', () => {
      const { result } = renderHookWithStore()

      act(() => {
        result.current.addItem(mockBook, 2)
        result.current.updateQuantity(mockBook.id, -1)
      })

      expect(result.current.items).toHaveLength(0)
      expect(result.current.totalItems).toBe(0)
      expect(result.current.totalPrice).toBe(0)
    })

    it('should handle updating non-existent item', () => {
      const { result } = renderHookWithStore()

      act(() => {
        result.current.addItem(mockBook, 2)
        result.current.updateQuantity('non-existent', 5)
      })

      expect(result.current.items).toHaveLength(1)
      expect(result.current.items[0].quantity).toBe(2)
      expect(result.current.totalItems).toBe(2)
      expect(result.current.totalPrice).toBe(59.80)
    })
  })

  describe('Clear Cart', () => {
    it('should clear all items from cart', () => {
      const { result } = renderHookWithStore()

      act(() => {
        result.current.addItem(mockBook, 2)
        result.current.addItem(mockBook2, 1)
        result.current.clearCart()
      })

      expect(result.current.items).toHaveLength(0)
      expect(result.current.totalItems).toBe(0)
      expect(result.current.totalPrice).toBe(0)
    })
  })

  describe('Check Item Status', () => {
    it('should check if item is in cart', () => {
      const { result } = renderHookWithStore()

      act(() => {
        result.current.addItem(mockBook, 2)
      })

      expect(result.current.isInCart(mockBook.id)).toBe(true)
      expect(result.current.isInCart(mockBook2.id)).toBe(false)
    })

    it('should get item quantity', () => {
      const { result } = renderHookWithStore()

      act(() => {
        result.current.addItem(mockBook, 3)
      })

      expect(result.current.getItemQuantity(mockBook.id)).toBe(3)
      expect(result.current.getItemQuantity(mockBook2.id)).toBe(0)
    })
  })

  describe('Price Calculations', () => {
    it('should calculate correct totals with different prices', () => {
      const { result } = renderHookWithStore()

      act(() => {
        result.current.addItem(mockBook, 2)
        result.current.addItem(mockBook2, 1)
      })

      const expectedTotal = (29.90 * 2) + (39.90 * 1)
      expect(result.current.totalPrice).toBe(expectedTotal)
      expect(result.current.totalItems).toBe(3)
    })

    it('should handle zero price books', () => {
      const freeBook: Book = {
        ...mockBook,
        id: '3',
        price: '0'
      }

      const { result } = renderHookWithStore()

      act(() => {
        result.current.addItem(freeBook, 2)
      })

      expect(result.current.totalPrice).toBe(0)
      expect(result.current.totalItems).toBe(2)
    })
  })
})
