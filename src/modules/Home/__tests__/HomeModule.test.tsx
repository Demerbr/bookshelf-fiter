import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HomeModule } from '../homeModule'
// Mock do hook useSearch
jest.mock('../../../hooks/useSearch', () => ({
  useSearch: jest.fn(),
}))

const mockUseSearch = require('../../../hooks/useSearch').useSearch

// Mock dos componentes filhos
jest.mock('../components/ErrorState', () => ({
  ErrorState: ({ error }: { error?: Error }) => (
    <div data-testid="error-state">Error: {error?.message}</div>
  ),
}))

jest.mock('../components/LoadingState', () => ({
  LoadingState: () => <div data-testid="loading-state">Loading...</div>,
}))

jest.mock('../components/ResultsCounter', () => ({
  ResultsCounter: ({ count, isLoading }: { count?: number; isLoading?: boolean }) => (
    <div data-testid="results-counter">
      {isLoading ? 'Loading...' : `Results: ${count || 0}`}
    </div>
  ),
}))

jest.mock('../components/BooksGrid', () => ({
  BooksGrid: ({ books }: { books: any[] }) => (
    <div data-testid="books-grid">
      {books.map(book => (
        <div key={book.id} data-testid={`book-${book.id}`}>
          {book.title}
        </div>
      ))}
    </div>
  ),
}))

jest.mock('../components/EmptyState', () => ({
  EmptyState: () => <div data-testid="empty-state">No books found</div>,
}))

jest.mock('../../../components/SortDropdown', () => ({
  SortDropdown: ({ onSortChange, currentSort }: any) => (
    <div data-testid="sort-dropdown">
      <button onClick={() => onSortChange('title')}>
        Sort: {currentSort}
      </button>
    </div>
  ),
}))

jest.mock('../../../components/InfiniteScrollWrapper', () => ({
  InfiniteScrollWrapper: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="infinite-scroll-wrapper">{children}</div>
  ),
}))

const createTestQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

const renderWithQueryClient = (component: React.ReactElement) => {
  const queryClient = createTestQueryClient()
  return render(
    <QueryClientProvider client={queryClient}>
      {component}
    </QueryClientProvider>
  )
}

describe('HomeModule', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Loading State', () => {
    it('should display loading state when data is loading', () => {
      // Arrange
      mockUseSearch.mockReturnValue({
        allBooks: [],
        isLoading: true,
        isError: false,
        error: null,
        isNotFound: false,
        searchQuery: '',
        handleSort: jest.fn(),
        currentSort: 'title',
        fetchNextPage: jest.fn(),
        hasNextPage: false,
        isFetchingNextPage: false,
      })

      // Act
      renderWithQueryClient(<HomeModule />)

      // Assert
      expect(screen.getByTestId('loading-state')).toBeInTheDocument()
      expect(screen.queryByTestId('books-grid')).not.toBeInTheDocument()
      expect(screen.queryByTestId('empty-state')).not.toBeInTheDocument()
    })
  })

  describe('Error State', () => {
    it('should display error state when there is an error', () => {
      // Arrange
      const error = new Error('Failed to fetch books')
      mockUseSearch.mockReturnValue({
        allBooks: [],
        isLoading: false,
        isError: true,
        error,
        isNotFound: false,
        searchQuery: '',
        handleSort: jest.fn(),
        currentSort: 'title',
        fetchNextPage: jest.fn(),
        hasNextPage: false,
        isFetchingNextPage: false,
      })

      // Act
      renderWithQueryClient(<HomeModule />)

      // Assert
      expect(screen.getByTestId('error-state')).toBeInTheDocument()
      expect(screen.getByText('Error: Failed to fetch books')).toBeInTheDocument()
    })
  })

  describe('Success State with Books', () => {
    it('should display books grid with results counter when books are loaded', () => {
      // Arrange
      const mockBooks = [
        { id: '1', title: 'Book 1', author: 'Author 1' },
        { id: '2', title: 'Book 2', author: 'Author 2' },
      ]
      mockUseSearch.mockReturnValue({
        allBooks: mockBooks,
        isLoading: false,
        isError: false,
        error: null,
        isNotFound: false,
        searchQuery: '',
        handleSort: jest.fn(),
        currentSort: 'title',
        fetchNextPage: jest.fn(),
        hasNextPage: true,
        isFetchingNextPage: false,
      })

      // Act
      renderWithQueryClient(<HomeModule />)

      // Assert
      expect(screen.getByTestId('results-counter')).toBeInTheDocument()
      expect(screen.getByText('Results: 2')).toBeInTheDocument()
      expect(screen.getByTestId('books-grid')).toBeInTheDocument()
      expect(screen.getByTestId('book-1')).toBeInTheDocument()
      expect(screen.getByTestId('book-2')).toBeInTheDocument()
    })

    it('should display sort dropdown when books are available', () => {
      // Arrange
      const mockBooks = [{ id: '1', title: 'Book 1', author: 'Author 1' }]
      mockUseSearch.mockReturnValue({
        allBooks: mockBooks,
        isLoading: false,
        isError: false,
        error: null,
        isNotFound: false,
        searchQuery: '',
        handleSort: jest.fn(),
        currentSort: 'title',
        fetchNextPage: jest.fn(),
        hasNextPage: true,
        isFetchingNextPage: false,
      })

      // Act
      renderWithQueryClient(<HomeModule />)

      // Assert
      expect(screen.getByTestId('sort-dropdown')).toBeInTheDocument()
    })

    it('should display infinite scroll wrapper when books are available', () => {
      // Arrange
      const mockBooks = [{ id: '1', title: 'Book 1', author: 'Author 1' }]
      mockUseSearch.mockReturnValue({
        allBooks: mockBooks,
        isLoading: false,
        isError: false,
        error: null,
        isNotFound: false,
        searchQuery: '',
        handleSort: jest.fn(),
        currentSort: 'title',
        fetchNextPage: jest.fn(),
        hasNextPage: true,
        isFetchingNextPage: false,
      })

      // Act
      renderWithQueryClient(<HomeModule />)

      // Assert
      expect(screen.getByTestId('infinite-scroll-wrapper')).toBeInTheDocument()
    })
  })

  describe('Empty State', () => {
    it('should display not found message when search returns no results', () => {
      // Arrange
      mockUseSearch.mockReturnValue({
        allBooks: [],
        isLoading: false,
        isError: false,
        error: null,
        isNotFound: true,
        searchQuery: 'nonexistent',
        handleSort: jest.fn(),
        currentSort: 'title',
        fetchNextPage: jest.fn(),
        hasNextPage: false,
        isFetchingNextPage: false,
      })

      // Act
      renderWithQueryClient(<HomeModule />)

      // Assert
      expect(screen.getByText('search.noBooksFound')).toBeInTheDocument()
      expect(screen.getByText('search.forQuery')).toBeInTheDocument()
    })

    it('should display empty state when no books exist', () => {
      // Arrange
      mockUseSearch.mockReturnValue({
        allBooks: [],
        isLoading: false,
        isError: false,
        error: null,
        isNotFound: false,
        searchQuery: '',
        handleSort: jest.fn(),
        currentSort: 'title',
        fetchNextPage: jest.fn(),
        hasNextPage: false,
        isFetchingNextPage: false,
      })

      // Act
      renderWithQueryClient(<HomeModule />)

      // Assert
      expect(screen.getByTestId('empty-state')).toBeInTheDocument()
    })
  })
})
