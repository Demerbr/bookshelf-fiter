import { render, screen } from '@testing-library/react'
import { LoadingState } from '../../components/LoadingState'

describe('LoadingState', () => {
  describe('Skeleton Rendering', () => {
    it('should display loading skeleton cards', () => {
      // Arrange
      // No props needed for LoadingState

      // Act
      render(<LoadingState />)

      // Assert
      const skeletonCards = document.querySelectorAll('.animate-pulse')
      expect(skeletonCards).toHaveLength(12)
    })

    it('should have proper grid layout', () => {
      // Arrange
      // No props needed for LoadingState

      // Act
      const { container } = render(<LoadingState />)

      // Assert
      const grid = container.firstChild
      expect(grid).toHaveClass('grid', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-4', 'xl:grid-cols-6')
    })

    it('should have skeleton elements with proper styling', () => {
      // Arrange
      // No props needed for LoadingState

      // Act
      render(<LoadingState />)

      // Assert
      const skeletonCards = document.querySelectorAll('.animate-pulse')
      skeletonCards.forEach(card => {
        expect(card).toHaveClass('bg-white', 'rounded-lg', 'shadow-amazon', 'border', 'border-amazon-border', 'p-4')
      })
    })
  })
})

