import { render, screen } from '@testing-library/react'
import { CartEmptyState } from '../CartEmptyState'

// Mock do react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'cart.empty.title': 'Your cart is empty',
        'cart.empty.description': 'Add some books to your cart to get started',
        'cart.empty.continueButton': 'Continue Shopping'
      }
      return translations[key] || key
    }
  })
}))

const renderComponent = (component: React.ReactElement) => {
  return render(component)
}

describe('CartEmptyState', () => {
  describe('Empty Cart Display', () => {
    it('should display empty cart title', () => {
      // Arrange
      // No props needed for CartEmptyState

      // Act
      renderComponent(<CartEmptyState />)

      // Assert
      expect(screen.getByText('Your cart is empty')).toBeInTheDocument()
    })

    it('should display empty cart description', () => {
      // Arrange
      // No props needed for CartEmptyState

      // Act
      renderComponent(<CartEmptyState />)

      // Assert
      expect(screen.getByText('Add some books to your cart to get started')).toBeInTheDocument()
    })

    it('should display continue shopping button', () => {
      // Arrange
      // No props needed for CartEmptyState

      // Act
      renderComponent(<CartEmptyState />)

      // Assert
      expect(screen.getByText('Continue Shopping')).toBeInTheDocument()
    })

    it('should have proper styling classes', () => {
      // Arrange
      // No props needed for CartEmptyState

      // Act
      const { container } = renderComponent(<CartEmptyState />)

      // Assert
      const emptyStateContainer = container.firstChild
      expect(emptyStateContainer).toHaveClass('bg-gray-50', 'min-h-screen', 'flex', 'items-center', 'justify-center')
    })

    it('should render shopping cart icon', () => {
      // Arrange
      // No props needed for CartEmptyState

      // Act
      renderComponent(<CartEmptyState />)

      // Assert
      const icon = screen.getByTestId('shopping-cart-icon')
      expect(icon).toBeInTheDocument()
      expect(icon).toHaveClass('h-24', 'w-24', 'text-gray-300')
    })
  })

  describe('Navigation', () => {
    it('should have link to home page', () => {
      // Arrange
      // No props needed for CartEmptyState

      // Act
      renderComponent(<CartEmptyState />)

      // Assert
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('href', '/')
    })
  })
})
