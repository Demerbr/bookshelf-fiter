import { render, screen } from '@testing-library/react'
import { FavoritesEmptyState } from '../FavoritesEmptyState'

// Mock do react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'favorites.empty.title': 'No favorites yet',
        'favorites.empty.description': 'Start adding books to your favorites to see them here',
        'favorites.empty.exploreButton': 'Explore Books'
      }
      return translations[key] || key
    }
  })
}))

const renderComponent = (component: React.ReactElement) => {
  return render(component)
}

describe('FavoritesEmptyState', () => {
  describe('Empty Favorites Display', () => {
    it('should display empty favorites title', () => {
      // Arrange
      // No props needed for FavoritesEmptyState

      // Act
      renderComponent(<FavoritesEmptyState />)

      // Assert
      expect(screen.getByText('No favorites yet')).toBeInTheDocument()
    })

    it('should display empty favorites description', () => {
      // Arrange
      // No props needed for FavoritesEmptyState

      // Act
      renderComponent(<FavoritesEmptyState />)

      // Assert
      expect(screen.getByText('Start adding books to your favorites to see them here')).toBeInTheDocument()
    })

    it('should display explore books button', () => {
      // Arrange
      // No props needed for FavoritesEmptyState

      // Act
      renderComponent(<FavoritesEmptyState />)

      // Assert
      expect(screen.getByText('Explore Books')).toBeInTheDocument()
    })

    it('should have proper styling classes', () => {
      // Arrange
      // No props needed for FavoritesEmptyState

      // Act
      const { container } = renderComponent(<FavoritesEmptyState />)

      // Assert
      const emptyStateContainer = container.firstChild
      expect(emptyStateContainer).toHaveClass('bg-gray-50', 'min-h-screen', 'flex', 'items-center', 'justify-center')
    })

    it('should render heart icon', () => {
      // Arrange
      // No props needed for FavoritesEmptyState

      // Act
      renderComponent(<FavoritesEmptyState />)

      // Assert
      const icon = screen.getByTestId('heart-icon')
      expect(icon).toBeInTheDocument()
      expect(icon).toHaveClass('h-24', 'w-24', 'text-gray-300')
    })
  })

  describe('Navigation', () => {
    it('should have link to home page', () => {
      // Arrange
      // No props needed for FavoritesEmptyState

      // Act
      renderComponent(<FavoritesEmptyState />)

      // Assert
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('href', '/')
    })
  })

  describe('Button Styling', () => {
    it('should have proper button styling', () => {
      // Arrange
      // No props needed for FavoritesEmptyState

      // Act
      renderComponent(<FavoritesEmptyState />)

      // Assert
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-blue-600', 'hover:bg-blue-700')
    })
  })
})
