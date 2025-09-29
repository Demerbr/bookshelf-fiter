import { render, screen, fireEvent, act } from '@testing-library/react'
import { SearchComponent } from '../search'

// Mock do setTimeout para controlar debounce
jest.useFakeTimers()

describe('SearchComponent', () => {
  const mockOnSearch = jest.fn()
  const mockOnClear = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
    jest.useFakeTimers()
  })

  describe('Basic Rendering', () => {
    it('should render search input', () => {
      // Arrange
      // No additional props needed

      // Act
      render(<SearchComponent onSearch={mockOnSearch} />)

      // Assert
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('should render search button', () => {
      // Arrange
      // No additional props needed

      // Act
      render(<SearchComponent onSearch={mockOnSearch} />)

      // Assert
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('should display default placeholder', () => {
      // Arrange
      // No additional props needed

      // Act
      render(<SearchComponent onSearch={mockOnSearch} />)

      // Assert
      expect(screen.getByPlaceholderText('search.placeholder')).toBeInTheDocument()
    })

    it('should display custom placeholder', () => {
      // Arrange
      const customPlaceholder = 'Search books...'

      // Act
      render(<SearchComponent onSearch={mockOnSearch} placeholder={customPlaceholder} />)

      // Assert
      expect(screen.getByPlaceholderText(customPlaceholder)).toBeInTheDocument()
    })
  })

  describe('User Interactions', () => {
    it('should update input value when user types', () => {
      // Arrange
      render(<SearchComponent onSearch={mockOnSearch} />)
      const input = screen.getByRole('textbox')

      // Act
      fireEvent.change(input, { target: { value: 'test query' } })

      // Assert
      expect(input).toHaveValue('test query')
    })

    it('should call onSearch with debounce when user types', () => {
      // Arrange
      render(<SearchComponent onSearch={mockOnSearch} />)
      const input = screen.getByRole('textbox')

      // Act
      act(() => {
        fireEvent.change(input, { target: { value: 'test' } })
        jest.advanceTimersByTime(500)
      })

      // Assert
      expect(mockOnSearch).toHaveBeenCalledWith('test')
    })

    it('should call onSearch immediately on form submit', () => {
      // Arrange
      render(<SearchComponent onSearch={mockOnSearch} />)
      const input = screen.getByRole('textbox')
      const form = screen.getByRole('textbox').closest('form')

      // Act
      fireEvent.change(input, { target: { value: 'test query' } })
      fireEvent.submit(form!)

      // Assert
      expect(mockOnSearch).toHaveBeenCalledWith('test query')
    })

    it('should trim whitespace on form submit', () => {
      // Arrange
      render(<SearchComponent onSearch={mockOnSearch} />)
      const input = screen.getByRole('textbox')
      const form = screen.getByRole('textbox').closest('form')

      // Act
      fireEvent.change(input, { target: { value: '  test query  ' } })
      fireEvent.submit(form!)

      // Assert
      expect(mockOnSearch).toHaveBeenCalledWith('test query')
    })

    it('should call onSearch with empty string for empty trimmed query', () => {
      // Arrange
      render(<SearchComponent onSearch={mockOnSearch} />)
      const input = screen.getByRole('textbox')
      const form = screen.getByRole('textbox').closest('form')

      // Act
      fireEvent.change(input, { target: { value: '   ' } })
      fireEvent.submit(form!)

      // Assert
      expect(mockOnSearch).toHaveBeenCalledWith('')
    })
  })

  describe('Clear Functionality', () => {
    it('should show clear button when input has value', () => {
      // Arrange
      render(<SearchComponent onSearch={mockOnSearch} />)
      const input = screen.getByRole('textbox')

      // Act
      fireEvent.change(input, { target: { value: 'test' } })

      // Assert
      expect(screen.getByTestId('clear-button')).toBeInTheDocument()
    })

    it('should hide clear button when input is empty', () => {
      // Arrange
      render(<SearchComponent onSearch={mockOnSearch} />)

      // Assert
      expect(screen.queryByTestId('clear-button')).not.toBeInTheDocument()
    })

    it('should clear input when clear button is clicked', () => {
      // Arrange
      render(<SearchComponent onSearch={mockOnSearch} />)
      const input = screen.getByRole('textbox')

      // Act
      fireEvent.change(input, { target: { value: 'test' } })
      const clearButton = screen.getByTestId('clear-button')
      fireEvent.click(clearButton)

      // Assert
      expect(input).toHaveValue('')
    })

    it('should call onClear when clear button is clicked and onClear is provided', () => {
      // Arrange
      render(<SearchComponent onSearch={mockOnSearch} onClear={mockOnClear} />)
      const input = screen.getByRole('textbox')

      // Act
      fireEvent.change(input, { target: { value: 'test' } })
      const clearButton = screen.getByTestId('clear-button')
      fireEvent.click(clearButton)

      // Assert
      expect(mockOnClear).toHaveBeenCalled()
    })

    it('should call onSearch with empty string when clear button is clicked and onClear is not provided', () => {
      // Arrange
      render(<SearchComponent onSearch={mockOnSearch} />)
      const input = screen.getByRole('textbox')

      // Act
      fireEvent.change(input, { target: { value: 'test' } })
      const clearButton = screen.getByTestId('clear-button')
      fireEvent.click(clearButton)

      // Assert
      expect(mockOnSearch).toHaveBeenCalledWith('')
    })
  })

  describe('External Value Control', () => {
    it('should sync with external value prop', () => {
      // Arrange
      const { rerender } = render(<SearchComponent onSearch={mockOnSearch} value="" />)

      // Act
      rerender(<SearchComponent onSearch={mockOnSearch} value="external value" />)

      // Assert
      expect(screen.getByRole('textbox')).toHaveValue('external value')
    })

    it('should focus and position cursor when external value changes', () => {
      // Arrange
      const { rerender } = render(<SearchComponent onSearch={mockOnSearch} value="" />)
      const input = screen.getByRole('textbox')

      // Act
      rerender(<SearchComponent onSearch={mockOnSearch} value="test" />)

      // Assert
      expect(input).toHaveFocus()
    })
  })

  describe('Styling and Layout', () => {
    it('should apply custom className', () => {
      // Arrange
      const customClass = 'custom-search-class'

      // Act
      const { container } = render(<SearchComponent onSearch={mockOnSearch} className={customClass} />)

      // Assert
      const form = container.querySelector('form')
      expect(form).toHaveClass(customClass)
    })

    it('should have proper input styling', () => {
      // Arrange
      // No additional props needed

      // Act
      render(<SearchComponent onSearch={mockOnSearch} />)

      // Assert
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('bg-white', 'w-full', 'rounded-r-none', 'h-full')
    })

    it('should have proper button styling', () => {
      // Arrange
      // No additional props needed

      // Act
      render(<SearchComponent onSearch={mockOnSearch} />)

      // Assert
      const button = screen.getByRole('button')
      expect(button).toHaveClass('h-full', 'w-10', 'rounded-l-none', 'rounded-r-md', 'bg-amazon-orange')
    })
  })
})
