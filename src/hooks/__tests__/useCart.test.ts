import { renderHook, act } from '@testing-library/react'
import { useCart } from '../useCart'
import { useCartStore } from '@/stores/useCartStore'
import { Book } from '@/services/types/book'

jest.mock('../../stores/useCartStore')
jest.mock('../../lib/formatters', () => ({
  formatPrice: (price: number) => `R$ ${price.toFixed(2).replace('.', ',')}`
}))

const mockUseCartStore = useCartStore as jest.MockedFunction<typeof useCartStore>

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

const mockCartItem = {
  id: '1',
  book: mockBook,
  quantity: 2,
  unitPrice: 29.90,
  addedAt: '2023-01-01T00:00:00Z'
}

const mockStoreState = {
  items: [mockCartItem],
  totalItems: 2,
  totalPrice: 59.80,
  addItem: jest.fn(),
  removeItem: jest.fn(),
  updateQuantity: jest.fn(),
  clearCart: jest.fn(),
  isInCart: jest.fn(),
  getItemQuantity: jest.fn()
}

const renderHookWithCart = () => {
  return renderHook(() => useCart())
}

describe('useCart', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockUseCartStore.mockReturnValue(mockStoreState)
  })

  describe('Cart State', () => {
    it('should return cart items from store', () => {
      const { result } = renderHookWithCart()

      expect(result.current.cartItems).toEqual([mockCartItem])
    })

    it('should return total items from store', () => {
      const { result } = renderHookWithCart()

      expect(result.current.totalItems).toBe(2)
    })

    it('should return total price from store', () => {
      const { result } = renderHookWithCart()

      expect(result.current.totalPrice).toBe(59.80)
    })

    it('should return isEmpty as true when no items', () => {
      mockUseCartStore.mockReturnValue({
        ...mockStoreState,
        items: []
      })

      const { result } = renderHookWithCart()

      expect(result.current.isEmpty).toBe(true)
    })

    it('should return isEmpty as false when has items', () => {
      const { result } = renderHookWithCart()

      expect(result.current.isEmpty).toBe(false)
    })
  })

  describe('Add Book to Cart', () => {
    it('should call addItem with book and default quantity', () => {
      const { result } = renderHookWithCart()

      act(() => {
        result.current.addBookToCart(mockBook)
      })

      expect(mockStoreState.addItem).toHaveBeenCalledWith(mockBook, 1)
    })

    it('should call addItem with book and custom quantity', () => {
      const { result } = renderHookWithCart()

      act(() => {
        result.current.addBookToCart(mockBook, 3)
      })

      expect(mockStoreState.addItem).toHaveBeenCalledWith(mockBook, 3)
    })
  })

  describe('Remove Book from Cart', () => {
    it('should call removeItem with book id', () => {
      const { result } = renderHookWithCart()

      act(() => {
        result.current.removeBookFromCart('book-id')
      })

      expect(mockStoreState.removeItem).toHaveBeenCalledWith('book-id')
    })
  })

  describe('Update Book Quantity', () => {
    it('should call updateQuantity with book id and quantity', () => {
      const { result } = renderHookWithCart()

      act(() => {
        result.current.updateBookQuantity('book-id', 5)
      })

      expect(mockStoreState.updateQuantity).toHaveBeenCalledWith('book-id', 5)
    })
  })

  describe('Clear Cart', () => {
    it('should call clearCart from store', () => {
      const { result } = renderHookWithCart()

      act(() => {
        result.current.clearCart()
      })

      expect(mockStoreState.clearCart).toHaveBeenCalled()
    })
  })

  describe('Check Item Status', () => {
    it('should return isInCart result from store', () => {
      mockStoreState.isInCart.mockReturnValue(true)
      const { result } = renderHookWithCart()

      const isInCart = result.current.isInCart('book-id')

      expect(mockStoreState.isInCart).toHaveBeenCalledWith('book-id')
      expect(isInCart).toBe(true)
    })

    it('should return getItemQuantity result from store', () => {
      mockStoreState.getItemQuantity.mockReturnValue(3)
      const { result } = renderHookWithCart()

      const quantity = result.current.getItemQuantity('book-id')

      expect(mockStoreState.getItemQuantity).toHaveBeenCalledWith('book-id')
      expect(quantity).toBe(3)
    })
  })

  describe('Price Formatting', () => {
    it('should format total price', () => {
      const { result } = renderHookWithCart()

      const formattedPrice = result.current.formatTotalPrice()

      expect(formattedPrice).toBe('R$ 59,80')
    })

    it('should format item total price', () => {
      const { result } = renderHookWithCart()

      const formattedPrice = result.current.getItemTotalPrice('1')

      expect(formattedPrice).toBe('R$ 59,80')
    })

    it('should return zero price for non-existent item', () => {
      const { result } = renderHookWithCart()

      const formattedPrice = result.current.getItemTotalPrice('non-existent')

      expect(formattedPrice).toBe('R$ 0,00')
    })

    it('should format price using formatter', () => {
      const { result } = renderHookWithCart()

      const formattedPrice = result.current.formatPrice(123.45)

      expect(formattedPrice).toBe('R$ 123,45')
    })
  })

  describe('Store Integration', () => {
    it('should use all store methods correctly', () => {
      const { result } = renderHookWithCart()

      act(() => {
        result.current.addBookToCart(mockBook, 2)
        result.current.removeBookFromCart('book-id')
        result.current.updateBookQuantity('book-id', 3)
        result.current.clearCart()
        result.current.isInCart('book-id')
        result.current.getItemQuantity('book-id')
      })

      expect(mockStoreState.addItem).toHaveBeenCalledWith(mockBook, 2)
      expect(mockStoreState.removeItem).toHaveBeenCalledWith('book-id')
      expect(mockStoreState.updateQuantity).toHaveBeenCalledWith('book-id', 3)
      expect(mockStoreState.clearCart).toHaveBeenCalled()
      expect(mockStoreState.isInCart).toHaveBeenCalledWith('book-id')
      expect(mockStoreState.getItemQuantity).toHaveBeenCalledWith('book-id')
    })
  })
})
