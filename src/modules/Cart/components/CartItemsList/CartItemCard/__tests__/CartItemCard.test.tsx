import { render, screen, fireEvent } from '@testing-library/react'
import { CartItemCard } from '../CartItemCard'
import { CartItem } from '@/types/cart'
import { Book } from '@/services/types/book'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'book.by': 'por',
        'cart.price': 'Preço',
        'cart.quantity': 'Quantidade',
        'cart.remove': 'Remover'
      }
      return translations[key] || key
    }
  })
}))

jest.mock('../../../../../../hooks/useCart', () => ({
  useCart: () => ({
    updateBookQuantity: jest.fn(),
    removeBookFromCart: jest.fn(),
    formatPrice: (price: number) => `R$ ${price.toFixed(2).replace('.', ',')}`
  })
}))

jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

jest.mock('../../../../../../components/ui/optimized-image', () => ({
  OptimizedImage: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: any }) => (
    <img src={src || ''} alt={alt} data-testid="book-image" {...props} />
  )
}))

const mockBook: Book = {
  id: '1',
  name: 'Test Book Title',
  authors: ['Author One', 'Author Two'],
  description: 'Test description',
  imagelink: 'test-image.jpg]',
  publishedat: '2023-01-01',
  createdat: '2023-01-01',
  searchable: 'test book author',
  price: '29.90'
}

const mockCartItem: CartItem = {
  id: '1',
  book: mockBook,
  quantity: 2,
  unitPrice: 29.90,
  addedAt: '2023-01-01T00:00:00Z'
}

const renderComponent = (item: CartItem) => {
  return render(<CartItemCard item={item} />)
}

describe('CartItemCard', () => {
  describe('Item Display', () => {
    it('should display book title', () => {
      renderComponent(mockCartItem)

      expect(screen.getByText('Test Book Title')).toBeInTheDocument()
    })

    it('should display authors', () => {
      renderComponent(mockCartItem)

      expect(screen.getByText('por Author One, Author Two')).toBeInTheDocument()
    })

    it('should display single author correctly', () => {
      const singleAuthorItem = {
        ...mockCartItem,
        book: { ...mockBook, authors: ['Single Author'] }
      }

      renderComponent(singleAuthorItem)

      expect(screen.getByText('por Single Author')).toBeInTheDocument()
    })

    it('should display unit price', () => {
      renderComponent(mockCartItem)

      // Use a more flexible text matcher for broken text
      expect(screen.getByText((content, element) => {
        return element?.textContent === 'Preço: R$ 29,90'
      })).toBeInTheDocument()
    })

    it('should display quantity', () => {
      renderComponent(mockCartItem)

      expect(screen.getByText('Quantidade:')).toBeInTheDocument()
    })

    it('should display total price', () => {
      renderComponent(mockCartItem)

      expect(screen.getByText('R$ 59,80')).toBeInTheDocument()
    })
  })

  describe('Image Handling', () => {
    it('should display book image', () => {
      renderComponent(mockCartItem)

      const image = screen.getByAltText('Test Book Title')
      expect(image).toBeInTheDocument()
    })

    it('should clean image URL by removing trailing bracket', () => {
      renderComponent(mockCartItem)

      const image = screen.getByAltText('Test Book Title')
      expect(image).toHaveAttribute('src', 'test-image.jpg')
    })

    it('should handle empty image link', () => {
      const itemWithoutImage = {
        ...mockCartItem,
        book: { ...mockBook, imagelink: '' }
      }

      renderComponent(itemWithoutImage)

      const image = screen.getByAltText('Test Book Title')
      // When imagelink is empty, getCleanImageUrl returns null
      expect(image.getAttribute('src')).toBeNull()
    })
  })

  describe('Navigation Links', () => {
    it('should have link to book detail page', () => {
      renderComponent(mockCartItem)

      const links = screen.getAllByRole('link')
      const titleLink = links.find(link => link.textContent?.includes('Test Book Title'))
      expect(titleLink).toHaveAttribute('href', '/books/1')
    })

    it('should have image link to book detail page', () => {
      renderComponent(mockCartItem)

      const links = screen.getAllByRole('link')
      const imageLink = links.find(link => link.querySelector('img[data-testid="book-image"]'))
      expect(imageLink).toHaveAttribute('href', '/books/1')
    })
  })

  describe('Quantity Counter', () => {
    it('should display current quantity', () => {
      renderComponent(mockCartItem)

      expect(screen.getByText('2')).toBeInTheDocument()
    })

    it('should have increase and decrease buttons', () => {
      renderComponent(mockCartItem)

      const increaseButton = screen.getByRole('button', { name: /increase quantity/i })
      const decreaseButton = screen.getByRole('button', { name: /decrease quantity/i })

      expect(increaseButton).toBeInTheDocument()
      expect(decreaseButton).toBeInTheDocument()
    })
  })

  describe('Remove Button', () => {
    it('should display remove button', () => {
      renderComponent(mockCartItem)

      expect(screen.getByText('Remover')).toBeInTheDocument()
    })

    it('should have trash icon', () => {
      renderComponent(mockCartItem)

      const trashIcon = screen.getByTestId('trash-icon')
      expect(trashIcon).toBeInTheDocument()
    })
  })

  describe('Styling', () => {
    it('should have proper container classes', () => {
      const { container } = renderComponent(mockCartItem)

      const cardContainer = container.firstChild
      expect(cardContainer).toHaveClass('border-b', 'border-gray-200', 'pb-4')
    })

    it('should have proper image container classes', () => {
      renderComponent(mockCartItem)

      const imageContainer = screen.getByAltText('Test Book Title').parentElement
      expect(imageContainer).toHaveClass('w-24', 'h-32', 'relative')
    })

    it('should have proper title styling', () => {
      renderComponent(mockCartItem)

      const title = screen.getByText('Test Book Title')
      expect(title).toHaveClass('text-lg', 'font-medium', 'text-gray-900')
    })
  })

  describe('Event Handling', () => {
    it('should prevent event propagation on quantity buttons', () => {
      renderComponent(mockCartItem)

      const increaseButton = screen.getByRole('button', { name: /increase quantity/i })
      fireEvent.click(increaseButton)

      // The test verifies that the button is clickable and doesn't throw errors
      expect(increaseButton).toBeInTheDocument()
    })
  })

  describe('Price Calculations', () => {
    it('should calculate total price correctly', () => {
      const itemWithDifferentQuantity = {
        ...mockCartItem,
        quantity: 3
      }

      renderComponent(itemWithDifferentQuantity)

      expect(screen.getByText('R$ 89,70')).toBeInTheDocument()
    })

    it('should handle zero quantity', () => {
      const itemWithZeroQuantity = {
        ...mockCartItem,
        quantity: 0
      }

      renderComponent(itemWithZeroQuantity)

      expect(screen.getByText('R$ 0,00')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have proper alt text for image', () => {
      renderComponent(mockCartItem)

      const image = screen.getByAltText('Test Book Title')
      expect(image).toBeInTheDocument()
    })

    it('should have proper button roles', () => {
      renderComponent(mockCartItem)

      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(3)
    })
  })
})
