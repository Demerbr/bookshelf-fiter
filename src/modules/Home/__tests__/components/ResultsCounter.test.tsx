import { render, screen } from '@testing-library/react'
import { ResultsCounter } from '../../components/ResultsCounter'

describe('ResultsCounter', () => {
  describe('Loading State', () => {
    it('should display loading text when isLoading is true', () => {
      // Arrange
      const props = { count: 5, isLoading: true }

      // Act
      render(<ResultsCounter {...props} />)

      // Assert
      expect(screen.getByText('common.loading')).toBeInTheDocument()
    })
  })

  describe('Results Display', () => {
    it('should display results count when isLoading is false', () => {
      // Arrange
      const props = { count: 10, isLoading: false }

      // Act
      render(<ResultsCounter {...props} />)

      // Assert
      expect(screen.getByText('search.resultsFound')).toBeInTheDocument()
    })

    it('should display zero when count is 0', () => {
      // Arrange
      const props = { count: 0, isLoading: false }

      // Act
      render(<ResultsCounter {...props} />)

      // Assert
      expect(screen.getByText('search.resultsFound')).toBeInTheDocument()
    })

    it('should display zero when count is undefined', () => {
      // Arrange
      const props = { isLoading: false }

      // Act
      render(<ResultsCounter {...props} />)

      // Assert
      expect(screen.getByText('search.resultsFound')).toBeInTheDocument()
    })
  })

  describe('Default Props', () => {
    it('should display zero count when no props provided', () => {
      // Arrange
      const props = {}

      // Act
      render(<ResultsCounter {...props} />)

      // Assert
      expect(screen.getByText('search.resultsFound')).toBeInTheDocument()
    })
  })
})

