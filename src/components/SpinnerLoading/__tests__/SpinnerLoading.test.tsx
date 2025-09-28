import { render, screen } from '@testing-library/react'
import { SpinnerLoading } from '../SpinnerLoading'

describe('SpinnerLoading', () => {
  describe('Basic Rendering', () => {
    it('should render with default props', () => {
      render(<SpinnerLoading />)
      expect(screen.getByText('Carregando...')).toBeInTheDocument()
    })

    it('should render with custom message', () => {
      const customMessage = 'Processando dados...'
      render(<SpinnerLoading message={customMessage} />)
      expect(screen.getByText(customMessage)).toBeInTheDocument()
    })

    it('should render with custom size', () => {
      const size = 'xl'
      render(<SpinnerLoading size={size} />)
      expect(screen.getByText('Carregando...')).toBeInTheDocument()
    })

    it('should render without message when empty string provided', () => {
      render(<SpinnerLoading message="" />)
      expect(screen.queryByText('Carregando...')).not.toBeInTheDocument()
    })
  })

  describe('Size Variants', () => {
    it('should render small size', () => {
      const { container } = render(<SpinnerLoading size="sm" />)
      const smallElement = container.querySelector('.w-8.h-8')
      expect(smallElement).toBeInTheDocument()
    })

    it('should render medium size', () => {
      const { container } = render(<SpinnerLoading size="md" />)
      const mediumElement = container.querySelector('.w-12.h-12')
      expect(mediumElement).toBeInTheDocument()
    })

    it('should render large size by default', () => {
      const { container } = render(<SpinnerLoading />)
      const largeElement = container.querySelector('.w-16.h-16')
      expect(largeElement).toBeInTheDocument()
    })

    it('should render extra large size', () => {
      const { container } = render(<SpinnerLoading size="xl" />)
      const xlElement = container.querySelector('.w-20.h-20')
      expect(xlElement).toBeInTheDocument()
    })
  })

  describe('Animation Elements', () => {
    it('should have animated elements', () => {
      const { container } = render(<SpinnerLoading />)
      const animatedElements = container.querySelectorAll('.animate-spin')
      expect(animatedElements.length).toBeGreaterThan(0)
    })

    it('should have proper container styling', () => {
      const { container } = render(<SpinnerLoading />)
      const containerElement = container.firstChild
      expect(containerElement).toHaveClass('flex', 'flex-col', 'items-center', 'justify-center', 'space-y-6')
    })
  })

  describe('Amazon Colors', () => {
    it('should render Loader2 icon with amazon-orange color', () => {
      const { container } = render(<SpinnerLoading />)
      const loaderIcon = container.querySelector('.text-amazon-orange')
      expect(loaderIcon).toBeInTheDocument()
    })

    it('should have amazon-blue border animation', () => {
      const { container } = render(<SpinnerLoading />)
      const amazonBlueBorder = container.querySelector('.border-amazon-blue')
      expect(amazonBlueBorder).toBeInTheDocument()
    })

    it('should have custom spin animation', () => {
      const { container } = render(<SpinnerLoading />)
      const customSpin = container.querySelector('.animate-\\[spin_3s_linear_infinite\\]')
      expect(customSpin).toBeInTheDocument()
    })

    it('should have amazon-text color for message', () => {
      const { container } = render(<SpinnerLoading message="Test message" />)
      const message = container.querySelector('.text-amazon-text')
      expect(message).toBeInTheDocument()
    })
  })
})
