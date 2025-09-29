import { render, screen, fireEvent } from '@testing-library/react'
import { CartItemsList } from '../CartItemsList'
import { CartItem } from '@/types/cart'
import { Book } from '@/services/types/book'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'cart.items': 'Itens do Carrinho'
      }
      return translations[key] || key
    }
  })
}))

jest.mock('../CartItemCard/CartItemCard', () => ({
  CartItemCard: ({ item }: { item: CartItem }) => (
    <div data-testid={`cart-item-${item.id}`}>
      {item.book.name} - Qty: {item.quantity}
    </div>
  )
}))

const mockBook1: Book = {
  id: '1',
  name: 'Book One',
  authors: ['Author One'],
  description: 'Description One',
  imagelink: 'image1.jpg',
  publishedat: '2023-01-01',
  createdat: '2023-01-01',
  searchable: 'book one author',
  price: '29.90'
}

const mockBook2: Book = {
  id: '2',
  name: 'Book Two',
  authors: ['Author Two'],
  description: 'Description Two',
  imagelink: 'image2.jpg',
  publishedat: '2023-02-01',
  createdat: '2023-02-01',
  searchable: 'book two author',
  price: '39.90'
}

const mockItems: CartItem[] = [
  {
    id: '1',
    book: mockBook1,
    quantity: 2,
    unitPrice: 29.90,
    addedAt: '2023-01-01T00:00:00Z'
  },
  {
    id: '2',
    book: mockBook2,
    quantity: 1,
    unitPrice: 39.90,
    addedAt: '2023-01-02T00:00:00Z'
  }
]

const renderComponent = (items: CartItem[]) => {
  return render(<CartItemsList items={items} />)
}

describe('CartItemsList', () => {
  describe('List Display', () => {
    it('should display cart items title', () => {
      renderComponent(mockItems)

      expect(screen.getByText('Itens do Carrinho')).toBeInTheDocument()
    })

    it('should render all cart items', () => {
      renderComponent(mockItems)

      expect(screen.getByTestId('cart-item-1')).toBeInTheDocument()
      expect(screen.getByTestId('cart-item-2')).toBeInTheDocument()
    })

    it('should display empty list when no items', () => {
      renderComponent([])

      expect(screen.getByText('Itens do Carrinho')).toBeInTheDocument()
      expect(screen.queryByTestId('cart-item-1')).not.toBeInTheDocument()
    })

    it('should render single item correctly', () => {
      const singleItem = [mockItems[0]]
      renderComponent(singleItem)

      expect(screen.getByTestId('cart-item-1')).toBeInTheDocument()
      expect(screen.queryByTestId('cart-item-2')).not.toBeInTheDocument()
    })
  })

  describe('Item Rendering', () => {
    it('should pass correct props to CartItemCard', () => {
      renderComponent(mockItems)

      const item1 = screen.getByTestId('cart-item-1')
      const item2 = screen.getByTestId('cart-item-2')

      expect(item1).toHaveTextContent('Book One - Qty: 2')
      expect(item2).toHaveTextContent('Book Two - Qty: 1')
    })

    it('should use item id as key for each CartItemCard', () => {
      renderComponent(mockItems)

      const item1 = screen.getByTestId('cart-item-1')
      const item2 = screen.getByTestId('cart-item-2')

      expect(item1).toBeInTheDocument()
      expect(item2).toBeInTheDocument()
    })
  })

  describe('Styling', () => {
    it('should have proper container classes', () => {
      const { container } = renderComponent(mockItems)

      const containerElement = container.firstChild
      expect(containerElement).toHaveClass('bg-white', 'rounded-lg', 'shadow-sm', 'border', 'p-6')
    })

    it('should have proper title styling', () => {
      renderComponent(mockItems)

      const title = screen.getByText('Itens do Carrinho')
      expect(title).toHaveClass('text-xl', 'font-semibold', 'text-gray-900', 'mb-6')
    })

    it('should have proper items container styling', () => {
      const { container } = renderComponent(mockItems)

      const itemsContainer = container.querySelector('.space-y-4')
      expect(itemsContainer).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have proper heading structure', () => {
      renderComponent(mockItems)

      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toHaveTextContent('Itens do Carrinho')
    })

    it('should have proper semantic structure', () => {
      renderComponent(mockItems)

      const heading = screen.getByRole('heading')
      expect(heading).toBeInTheDocument()
    })
  })

  describe('Edge Cases', () => {
    it('should handle items with zero quantity', () => {
      const zeroQuantityItem: CartItem = {
        ...mockItems[0],
        quantity: 0
      }

      renderComponent([zeroQuantityItem])

      expect(screen.getByTestId('cart-item-1')).toBeInTheDocument()
    })

    it('should handle items with large quantities', () => {
      const largeQuantityItem: CartItem = {
        ...mockItems[0],
        quantity: 999
      }

      renderComponent([largeQuantityItem])

      expect(screen.getByTestId('cart-item-1')).toBeInTheDocument()
    })

    it('should handle items with missing book data', () => {
      const incompleteItem: CartItem = {
        id: '3',
        book: {
          id: '3',
          name: '',
          authors: [],
          description: '',
          imagelink: '',
          publishedat: '',
          createdat: '',
          searchable: '',
          price: '0'
        },
        quantity: 1,
        unitPrice: 0,
        addedAt: '2023-01-01T00:00:00Z'
      }

      renderComponent([incompleteItem])

      expect(screen.getByTestId('cart-item-3')).toBeInTheDocument()
    })
  })

  describe('Performance', () => {
    it('should render efficiently with many items', () => {
      const manyItems = Array.from({ length: 100 }, (_, index) => ({
        id: `item-${index}`,
        book: {
          ...mockBook1,
          id: `book-${index}`,
          name: `Book ${index}`
        },
        quantity: 1,
        unitPrice: 10.00,
        addedAt: '2023-01-01T00:00:00Z'
      }))

      renderComponent(manyItems)

      expect(screen.getByTestId('cart-item-item-0')).toBeInTheDocument()
      expect(screen.getByTestId('cart-item-item-99')).toBeInTheDocument()
    })
  })
})
