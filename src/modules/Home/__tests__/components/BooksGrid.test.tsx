import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BooksGrid } from '../../components/BooksGrid'
import { Book } from '../../../../services/types/book'

// Mock do hook useFavorites
const mockToggleFavorite = jest.fn()
const mockIsFavorite = jest.fn(() => false)

jest.mock('../../../../hooks/useFavorites', () => ({
  useFavorites: () => ({
    toggleFavorite: mockToggleFavorite,
    isFavorite: mockIsFavorite,
    favorites: [],
    favoritesCount: 0,
    isEmpty: true,
    addFavorite: jest.fn(),
    removeFavorite: jest.fn(),
    clearFavorites: jest.fn(),
  }),
}))

// Mock do componente BookCard
jest.mock('../../../../components/BookCard', () => ({
  BookCard: ({ children, book }: { children: React.ReactNode; book: Book }) => (
    <div data-testid={`book-card-${book.id}`}>
      <div data-testid={`book-title-${book.id}`}>{book.name}</div>
      {children}
    </div>
  ),
  BookCardImage: ({ onFavoriteClick, isFavorite }: any) => (
    <button 
      data-testid="favorite-button" 
      onClick={onFavoriteClick}
      data-favorite={isFavorite}
    >
      {isFavorite ? '❤️' : '🤍'}
    </button>
  ),
  BookCardInfo: () => <div data-testid="book-info">Book Info</div>,
  BookCardRating: () => <div data-testid="book-rating">Rating</div>,
  BookCardPrice: () => <div data-testid="book-price">Price</div>,
  BookCardAction: () => <div data-testid="book-action">Action</div>,
}))

// Mock do ErrorBoundary
jest.mock('../../../../components/ErrorBoundary', () => ({
  ErrorBoundary: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

const mockBooks: Book[] = [
  {
    id: '1',
    name: 'Test Book 1',
    authors: ['Author 1'],
    description: 'Description 1',
    imagelink: 'https://example.com/book1.jpg',
    publishedat: '2023-01-01',
    createdat: '2023-01-01',
    searchable: 'test book 1 author 1',
    price: '29.99',
  },
  {
    id: '2',
    name: 'Test Book 2',
    authors: ['Author 2'],
    description: 'Description 2',
    imagelink: 'https://example.com/book2.jpg',
    publishedat: '2023-01-01',
    createdat: '2023-01-01',
    searchable: 'test book 2 author 2',
    price: '19.99',
  },
]

describe('BooksGrid', () => {
  describe('Rendering Books', () => {
    it('should render all provided books', () => {
      // Arrange
      const books = mockBooks

      // Act
      render(<BooksGrid books={books} />)

      // Assert
      expect(screen.getByTestId('book-card-1')).toBeInTheDocument()
      expect(screen.getByTestId('book-card-2')).toBeInTheDocument()
      expect(screen.getByText('Test Book 1')).toBeInTheDocument()
      expect(screen.getByText('Test Book 2')).toBeInTheDocument()
    })

    it('should render book components for each book', () => {
      // Arrange
      const books = mockBooks

      // Act
      render(<BooksGrid books={books} />)

      // Assert
      const bookCards = screen.getAllByTestId(/book-card-/)
      expect(bookCards).toHaveLength(2)

      const favoriteButtons = screen.getAllByTestId('favorite-button')
      expect(favoriteButtons).toHaveLength(2)

      const bookInfos = screen.getAllByTestId('book-info')
      expect(bookInfos).toHaveLength(2)
    })

    it('should apply custom className', () => {
      // Arrange
      const books = mockBooks
      const customClassName = 'custom-class'

      // Act
      const { container } = render(<BooksGrid books={books} className={customClassName} />)

      // Assert
      const gridContainer = container.querySelector('.grid')
      expect(gridContainer).toHaveClass('custom-class')
    })
  })

  describe('Empty State', () => {
    it('should render empty grid when no books provided', () => {
      // Arrange
      const books: Book[] = []

      // Act
      render(<BooksGrid books={books} />)

      // Assert
      expect(screen.queryByTestId(/book-card-/)).not.toBeInTheDocument()
    })
  })

  describe('User Interactions', () => {
    it('should call toggleFavorite when favorite button is clicked', async () => {
      // Arrange
      const books = mockBooks

      // Act
      render(<BooksGrid books={books} />)
      const favoriteButtons = screen.getAllByTestId('favorite-button')
      await userEvent.click(favoriteButtons[0])

      // Assert
      expect(mockToggleFavorite).toHaveBeenCalledWith(mockBooks[0])
    })
  })
})
