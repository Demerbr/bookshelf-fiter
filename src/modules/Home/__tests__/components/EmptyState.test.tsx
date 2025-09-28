import { render, screen } from '@testing-library/react'
import { EmptyState } from '../../components/EmptyState'

describe('EmptyState', () => {
  describe('Empty State Display', () => {
    it('should display empty state message', () => {
      // Arrange
      // No props needed for EmptyState

      // Act
      render(<EmptyState />)

      // Assert
      expect(screen.getByText('search.noBooksFound')).toBeInTheDocument()
    })

    it('should have proper styling', () => {
      // Arrange
      // No props needed for EmptyState

      // Act
      const { container } = render(<EmptyState />)

      // Assert
      const emptyStateContainer = container.firstChild
      expect(emptyStateContainer).toHaveClass('text-center', 'py-16')
    })

    it('should display search suggestion', () => {
      // Arrange
      // No props needed for EmptyState

      // Act
      render(<EmptyState />)

      // Assert
      expect(screen.getByText('search.adjustFilters')).toBeInTheDocument()
    })
  })
})
