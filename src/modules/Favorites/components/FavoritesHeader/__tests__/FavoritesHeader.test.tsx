import { render, screen } from '@testing-library/react'
import { FavoritesHeader } from '../FavoritesHeader'

// Mock do react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { count?: number }) => {
      const translations: Record<string, string> = {
        'favorites.title': 'My Favorites',
        'favorites.count': options?.count === 1 ? '1 favorite' : `${options?.count || 0} favorites`
      }
      return translations[key] || key
    }
  })
}))

const renderComponent = (component: React.ReactElement) => {
  return render(component)
}

describe('FavoritesHeader', () => {
  describe('Header Display', () => {
    it('should display favorites title', () => {
      // Arrange
      const count = 5

      // Act
      renderComponent(<FavoritesHeader count={count} />)

      // Assert
      expect(screen.getByText('My Favorites')).toBeInTheDocument()
    })

    it('should display favorites count for multiple items', () => {
      // Arrange
      const count = 3

      // Act
      renderComponent(<FavoritesHeader count={count} />)

      // Assert
      expect(screen.getByText('3 favorites')).toBeInTheDocument()
    })

    it('should display singular favorites count', () => {
      // Arrange
      const count = 1

      // Act
      renderComponent(<FavoritesHeader count={count} />)

      // Assert
      expect(screen.getByText('1 favorite')).toBeInTheDocument()
    })

    it('should display zero favorites count', () => {
      // Arrange
      const count = 0

      // Act
      renderComponent(<FavoritesHeader count={count} />)

      // Assert
      expect(screen.getByText('0 favorites')).toBeInTheDocument()
    })

    it('should render heart icon', () => {
      // Arrange
      const count = 2

      // Act
      renderComponent(<FavoritesHeader count={count} />)

      // Assert
      const icon = screen.getByTestId('heart-icon')
      expect(icon).toBeInTheDocument()
      expect(icon).toHaveClass('h-8', 'w-8', 'text-red-500', 'fill-current')
    })

    it('should have proper styling classes', () => {
      // Arrange
      const count = 3

      // Act
      const { container } = renderComponent(<FavoritesHeader count={count} />)

      // Assert
      const headerContainer = container.firstChild
      expect(headerContainer).toHaveClass('mb-8')
    })
  })

  describe('Props Handling', () => {
    it('should handle undefined count gracefully', () => {
      // Arrange
      const count = undefined as any

      // Act
      renderComponent(<FavoritesHeader count={count} />)

      // Assert
      expect(screen.getByText('0 favorites')).toBeInTheDocument()
    })

    it('should handle negative count', () => {
      // Arrange
      const count = -1

      // Act
      renderComponent(<FavoritesHeader count={count} />)

      // Assert
      expect(screen.getByText('-1 favorites')).toBeInTheDocument()
    })
  })

  describe('Layout Structure', () => {
    it('should have proper title styling', () => {
      // Arrange
      const count = 2

      // Act
      renderComponent(<FavoritesHeader count={count} />)

      // Assert
      const title = screen.getByText('My Favorites')
      expect(title).toHaveClass('text-3xl', 'font-bold', 'text-gray-900')
    })

    it('should have proper count styling', () => {
      // Arrange
      const count = 4

      // Act
      renderComponent(<FavoritesHeader count={count} />)

      // Assert
      const countText = screen.getByText('4 favorites')
      expect(countText).toHaveClass('text-gray-600')
    })

    it('should have proper icon and title alignment', () => {
      // Arrange
      const count = 1

      // Act
      const { container } = renderComponent(<FavoritesHeader count={count} />)

      // Assert
      const flexContainer = container.querySelector('.flex')
      expect(flexContainer).toHaveClass('items-center', 'gap-3', 'mb-2')
    })
  })
})
