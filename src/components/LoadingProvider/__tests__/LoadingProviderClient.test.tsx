import { render, screen } from '@testing-library/react'
import { LoadingProviderClient } from '../LoadingProviderClient'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'common.loading': 'Carregando...',
        'loading.books': 'Carregando livros...',
        'loading.bookDetails': 'Carregando detalhes do livro...',
        'loading.cart': 'Carregando carrinho...',
        'loading.favorites': 'Carregando favoritos...',
        'loading.moreBooks': 'Carregando mais livros...',
        'loading.search': 'Buscando livros...',
        'loading.sorting': 'Ordenando livros...',
        'loading.initializing': 'Inicializando...'
      }
      return translations[key] || key
    }
  })
}))

describe('LoadingProviderClient', () => {
  describe('Basic Rendering', () => {
    it('should render with default props', () => {
      render(<LoadingProviderClient />)
      expect(screen.getByText('Carregando...')).toBeInTheDocument()
    })

    it('should render with custom message key', () => {
      render(<LoadingProviderClient message="loading.books" />)
      expect(screen.getByText('Carregando livros...')).toBeInTheDocument()
    })

    it('should render with custom size', () => {
      const size = 'xl'
      render(<LoadingProviderClient size={size} />)
      expect(screen.getByText('Carregando...')).toBeInTheDocument()
    })
  })

  describe('Size Variants', () => {
    it('should render small size', () => {
      const { container } = render(<LoadingProviderClient size="sm" />)
      const smallElement = container.querySelector('.w-8.h-8')
      expect(smallElement).toBeInTheDocument()
    })

    it('should render medium size', () => {
      const { container } = render(<LoadingProviderClient size="md" />)
      const mediumElement = container.querySelector('.w-12.h-12')
      expect(mediumElement).toBeInTheDocument()
    })

    it('should render large size by default', () => {
      const { container } = render(<LoadingProviderClient />)
      const largeElement = container.querySelector('.w-16.h-16')
      expect(largeElement).toBeInTheDocument()
    })

    it('should render extra large size', () => {
      const { container } = render(<LoadingProviderClient size="xl" />)
      const xlElement = container.querySelector('.w-20.h-20')
      expect(xlElement).toBeInTheDocument()
    })
  })

  describe('Translation Support', () => {
    it('should translate loading.books message', () => {
      render(<LoadingProviderClient message="loading.books" />)
      expect(screen.getByText('Carregando livros...')).toBeInTheDocument()
    })

    it('should translate loading.cart message', () => {
      render(<LoadingProviderClient message="loading.cart" />)
      expect(screen.getByText('Carregando carrinho...')).toBeInTheDocument()
    })

    it('should translate loading.favorites message', () => {
      render(<LoadingProviderClient message="loading.favorites" />)
      expect(screen.getByText('Carregando favoritos...')).toBeInTheDocument()
    })

    it('should translate loading.moreBooks message', () => {
      render(<LoadingProviderClient message="loading.moreBooks" />)
      expect(screen.getByText('Carregando mais livros...')).toBeInTheDocument()
    })

    it('should translate loading.initializing message', () => {
      render(<LoadingProviderClient message="loading.initializing" />)
      expect(screen.getByText('Inicializando...')).toBeInTheDocument()
    })
  })

  describe('Amazon Colors', () => {
    it('should render Loader2 icon with amazon-orange color', () => {
      const { container } = render(<LoadingProviderClient />)
      const loaderIcon = container.querySelector('.text-amazon-orange')
      expect(loaderIcon).toBeInTheDocument()
    })

    it('should have amazon-blue border animation', () => {
      const { container } = render(<LoadingProviderClient />)
      const amazonBlueBorder = container.querySelector('.border-amazon-blue')
      expect(amazonBlueBorder).toBeInTheDocument()
    })

    it('should have amazon-text color for message', () => {
      const { container } = render(<LoadingProviderClient message="loading.books" />)
      const message = container.querySelector('.text-amazon-text')
      expect(message).toBeInTheDocument()
    })
  })
})
