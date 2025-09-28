import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ErrorState } from '../../components/ErrorState'

describe('ErrorState', () => {
  describe('Error Display', () => {
    it('should display error message when error is provided', () => {
      // Arrange
      const error = new Error('Failed to load books')

      // Act
      render(<ErrorState error={error} />)

      // Assert
      expect(screen.getByText('Failed to load books')).toBeInTheDocument()
    })

    it('should display error message without retry button', () => {
      // Arrange
      const error = new Error('Network error')

      // Act
      render(<ErrorState error={error} />)

      // Assert
      expect(screen.getByText('Network error')).toBeInTheDocument()
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })

    it('should display generic error message when no error provided', () => {
      // Arrange
      // No error prop provided

      // Act
      render(<ErrorState />)

      // Assert
      expect(screen.getByText('Tente novamente mais tarde')).toBeInTheDocument()
    })
  })

  describe('Error Title', () => {
    it('should display error title', () => {
      // Arrange
      const error = new Error('Test error')

      // Act
      render(<ErrorState error={error} />)

      // Assert
      expect(screen.getByText('Erro ao carregar livros')).toBeInTheDocument()
    })
  })
})
