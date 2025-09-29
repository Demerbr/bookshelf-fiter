import { render, screen, fireEvent } from '@testing-library/react'
import { QuantityCounter } from '../quantity-counter'

const renderComponent = (props: {
  quantity: number
  onIncrease: (e: React.MouseEvent) => void
  onDecrease: (e: React.MouseEvent) => void
  min?: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) => {
  return render(<QuantityCounter {...props} />)
}

describe('QuantityCounter', () => {
  const mockOnIncrease = jest.fn()
  const mockOnDecrease = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Basic Display', () => {
    it('should display current quantity', () => {
      renderComponent({
        quantity: 5,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease
      })

      expect(screen.getByText('5')).toBeInTheDocument()
    })

    it('should display zero quantity', () => {
      renderComponent({
        quantity: 0,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease
      })

      expect(screen.getByText('0')).toBeInTheDocument()
    })

    it('should display maximum quantity', () => {
      renderComponent({
        quantity: 10,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease
      })

      expect(screen.getByText('10')).toBeInTheDocument()
    })
  })

  describe('Buttons', () => {
    it('should render increase and decrease buttons', () => {
      renderComponent({
        quantity: 5,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease
      })

      const increaseButton = screen.getByRole('button', { name: /increase quantity/i })
      const decreaseButton = screen.getByRole('button', { name: /decrease quantity/i })

      expect(increaseButton).toBeInTheDocument()
      expect(decreaseButton).toBeInTheDocument()
    })

    it('should call onIncrease when increase button is clicked', () => {
      renderComponent({
        quantity: 5,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease
      })

      const increaseButton = screen.getByRole('button', { name: /increase quantity/i })
      fireEvent.click(increaseButton)

      expect(mockOnIncrease).toHaveBeenCalledTimes(1)
    })

    it('should call onDecrease when decrease button is clicked', () => {
      renderComponent({
        quantity: 5,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease
      })

      const decreaseButton = screen.getByRole('button', { name: /decrease quantity/i })
      fireEvent.click(decreaseButton)

      expect(mockOnDecrease).toHaveBeenCalledTimes(1)
    })
  })

  describe('Button States', () => {
    it('should disable decrease button when quantity equals min', () => {
      renderComponent({
        quantity: 0,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease,
        min: 0
      })

      const decreaseButton = screen.getByRole('button', { name: /decrease quantity/i })
      expect(decreaseButton).toBeDisabled()
    })

    it('should disable increase button when quantity equals max', () => {
      renderComponent({
        quantity: 10,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease,
        max: 10
      })

      const increaseButton = screen.getByRole('button', { name: /increase quantity/i })
      expect(increaseButton).toBeDisabled()
    })

    it('should enable both buttons when quantity is between min and max', () => {
      renderComponent({
        quantity: 5,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease,
        min: 0,
        max: 10
      })

      const increaseButton = screen.getByRole('button', { name: /increase quantity/i })
      const decreaseButton = screen.getByRole('button', { name: /decrease quantity/i })

      expect(increaseButton).not.toBeDisabled()
      expect(decreaseButton).not.toBeDisabled()
    })
  })

  describe('Size Variants', () => {
    it('should apply small size classes', () => {
      const { container } = renderComponent({
        quantity: 5,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease,
        size: 'sm'
      })

      const containerElement = container.firstChild
      expect(containerElement).toHaveClass('flex', 'items-center', 'border', 'border-gray-300', 'rounded-md')

      const buttons = screen.getAllByRole('button')
      buttons.forEach(button => {
        expect(button).toHaveClass('h-10', 'w-10')
      })

      const display = screen.getByText('5')
      expect(display).toHaveClass('w-10', 'text-center', 'font-medium', 'border-x', 'border-gray-300', 'py-2', 'text-sm')
    })

    it('should apply medium size classes by default', () => {
      const { container } = renderComponent({
        quantity: 5,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease
      })

      const containerElement = container.firstChild
      expect(containerElement).toHaveClass('flex', 'items-center', 'border', 'border-gray-300', 'rounded-md')

      const buttons = screen.getAllByRole('button')
      buttons.forEach(button => {
        expect(button).toHaveClass('h-12', 'w-12')
      })

      const display = screen.getByText('5')
      expect(display).toHaveClass('min-w-[60px]', 'h-12', 'text-center', 'font-medium', 'border-x', 'border-gray-300', 'py-2', 'text-lg')
    })

    it('should apply large size classes', () => {
      const { container } = renderComponent({
        quantity: 5,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease,
        size: 'lg'
      })

      const containerElement = container.firstChild
      expect(containerElement).toHaveClass('flex', 'items-center', 'border', 'border-gray-300', 'rounded-md')

      const buttons = screen.getAllByRole('button')
      buttons.forEach(button => {
        expect(button).toHaveClass('h-14', 'w-14')
      })

      const display = screen.getByText('5')
      expect(display).toHaveClass('min-w-[80px]', 'h-14', 'text-center', 'font-medium', 'border-x', 'border-gray-300', 'py-2', 'text-xl')
    })
  })

  describe('Custom Props', () => {
    it('should apply custom className', () => {
      const { container } = renderComponent({
        quantity: 5,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease,
        className: 'custom-class'
      })

      const containerElement = container.firstChild
      expect(containerElement).toHaveClass('custom-class')
    })

    it('should use custom min value', () => {
      renderComponent({
        quantity: 1,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease,
        min: 1
      })

      const decreaseButton = screen.getByRole('button', { name: /decrease quantity/i })
      expect(decreaseButton).toBeDisabled()
    })

    it('should use custom max value', () => {
      renderComponent({
        quantity: 5,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease,
        max: 5
      })

      const increaseButton = screen.getByRole('button', { name: /increase quantity/i })
      expect(increaseButton).toBeDisabled()
    })
  })

  describe('Icons', () => {
    it('should display plus icon in increase button', () => {
      renderComponent({
        quantity: 5,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease
      })

      const increaseButton = screen.getByRole('button', { name: /increase quantity/i })
      const plusIcon = increaseButton.querySelector('svg')
      expect(plusIcon).toBeInTheDocument()
    })

    it('should display minus icon in decrease button', () => {
      renderComponent({
        quantity: 5,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease
      })

      const decreaseButton = screen.getByRole('button', { name: /decrease quantity/i })
      const minusIcon = decreaseButton.querySelector('svg')
      expect(minusIcon).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have proper button roles', () => {
      renderComponent({
        quantity: 5,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease
      })

      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(2)
    })

    it('should have touch manipulation classes for mobile', () => {
      renderComponent({
        quantity: 5,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease
      })

      const buttons = screen.getAllByRole('button')
      buttons.forEach(button => {
        expect(button).toHaveClass('touch-manipulation')
      })
    })

    it('should have minimum touch target size', () => {
      renderComponent({
        quantity: 5,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease
      })

      const buttons = screen.getAllByRole('button')
      buttons.forEach(button => {
        expect(button).toHaveClass('min-h-[44px]', 'min-w-[44px]')
      })
    })
  })

  describe('Event Handling', () => {
    it('should pass event object to onIncrease', () => {
      renderComponent({
        quantity: 5,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease
      })

      const increaseButton = screen.getByRole('button', { name: /increase quantity/i })
      fireEvent.click(increaseButton)

      expect(mockOnIncrease).toHaveBeenCalledWith(expect.any(Object))
    })

    it('should pass event object to onDecrease', () => {
      renderComponent({
        quantity: 5,
        onIncrease: mockOnIncrease,
        onDecrease: mockOnDecrease
      })

      const decreaseButton = screen.getByRole('button', { name: /decrease quantity/i })
      fireEvent.click(decreaseButton)

      expect(mockOnDecrease).toHaveBeenCalledWith(expect.any(Object))
    })
  })
})
