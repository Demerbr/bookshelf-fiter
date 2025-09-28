import { render, screen } from '@testing-library/react'
import { LoadingProviderServer } from '../LoadingProviderServer'

describe('LoadingProviderServer', () => {
  describe('Basic Rendering', () => {
    it('should render with default props', () => {
      render(<LoadingProviderServer />)
      expect(screen.getByText('Carregando...')).toBeInTheDocument()
    })

    it('should render with custom message', () => {
      const customMessage = 'Processando dados...'
      render(<LoadingProviderServer message={customMessage} />)
      expect(screen.getByText(customMessage)).toBeInTheDocument()
    })

    it('should render with custom size', () => {
      const size = 'xl'
      render(<LoadingProviderServer size={size} />)
      expect(screen.getByText('Carregando...')).toBeInTheDocument()
    })
  })

  describe('Size Variants', () => {
    it('should render small size', () => {
      const { container } = render(<LoadingProviderServer size="sm" />)
      const smallElement = container.querySelector('.w-8.h-8')
      expect(smallElement).toBeInTheDocument()
    })

    it('should render medium size', () => {
      const { container } = render(<LoadingProviderServer size="md" />)
      const mediumElement = container.querySelector('.w-12.h-12')
      expect(mediumElement).toBeInTheDocument()
    })

    it('should render large size by default', () => {
      const { container } = render(<LoadingProviderServer />)
      const largeElement = container.querySelector('.w-16.h-16')
      expect(largeElement).toBeInTheDocument()
    })

    it('should render extra large size', () => {
      const { container } = render(<LoadingProviderServer size="xl" />)
      const xlElement = container.querySelector('.w-20.h-20')
      expect(xlElement).toBeInTheDocument()
    })
  })

  describe('Amazon Colors', () => {
    it('should render Loader2 icon with amazon-orange color', () => {
      const { container } = render(<LoadingProviderServer />)
      const loaderIcon = container.querySelector('.text-amazon-orange')
      expect(loaderIcon).toBeInTheDocument()
    })

    it('should have amazon-blue border animation', () => {
      const { container } = render(<LoadingProviderServer />)
      const amazonBlueBorder = container.querySelector('.border-amazon-blue')
      expect(amazonBlueBorder).toBeInTheDocument()
    })

    it('should have amazon-text color for message', () => {
      const { container } = render(<LoadingProviderServer message="Test message" />)
      const message = container.querySelector('.text-amazon-text')
      expect(message).toBeInTheDocument()
    })
  })
})
