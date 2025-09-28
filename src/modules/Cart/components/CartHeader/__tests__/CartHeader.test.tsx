import { render, screen } from '@testing-library/react'
import { CartHeader } from '../CartHeader'

// Mock do react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { count?: number }) => {
      const translations: Record<string, string> = {
        'cart.title': 'Shopping Cart',
        'cart.count': options?.count === 1 ? '1 item' : `${options?.count || 0} items`
      }
      return translations[key] || key
    }
  })
}))

const renderComponent = (component: React.ReactElement) => {
  return render(component)
}

describe('CartHeader', () => {
  describe('Header Display', () => {
    it('should display cart title', () => {
      // Arrange
      const itemCount = 3

      // Act
      renderComponent(<CartHeader itemCount={itemCount} />)

      // Assert
      expect(screen.getByText('Shopping Cart')).toBeInTheDocument()
    })

    it('should display item count for multiple items', () => {
      // Arrange
      const itemCount = 5

      // Act
      renderComponent(<CartHeader itemCount={itemCount} />)

      // Assert
      expect(screen.getByText('5 items')).toBeInTheDocument()
    })

    it('should display singular item count', () => {
      // Arrange
      const itemCount = 1

      // Act
      renderComponent(<CartHeader itemCount={itemCount} />)

      // Assert
      expect(screen.getByText('1 item')).toBeInTheDocument()
    })

    it('should display zero items count', () => {
      // Arrange
      const itemCount = 0

      // Act
      renderComponent(<CartHeader itemCount={itemCount} />)

      // Assert
      expect(screen.getByText('0 items')).toBeInTheDocument()
    })

    it('should render shopping cart icon', () => {
      // Arrange
      const itemCount = 2

      // Act
      renderComponent(<CartHeader itemCount={itemCount} />)

      // Assert
      const icon = screen.getByTestId('shopping-cart-icon')
      expect(icon).toBeInTheDocument()
      expect(icon).toHaveClass('h-8', 'w-8', 'text-yellow-600')
    })

    it('should have proper styling classes', () => {
      // Arrange
      const itemCount = 3

      // Act
      const { container } = renderComponent(<CartHeader itemCount={itemCount} />)

      // Assert
      const headerContainer = container.firstChild
      expect(headerContainer).toHaveClass('mb-8')
    })
  })

  describe('Props Handling', () => {
    it('should handle undefined itemCount gracefully', () => {
      // Arrange
      const itemCount = undefined as any

      // Act
      renderComponent(<CartHeader itemCount={itemCount} />)

      // Assert
      expect(screen.getByText('0 items')).toBeInTheDocument()
    })
  })
})
