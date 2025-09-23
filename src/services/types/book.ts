export type Book = {
  id: string;
  name: string;
  authors: string[];
  description: string;
  imagelink: string;
  publishedat: string;
  createdat: string;
  searchable: string;
};

export type BooksListResponse = {
  data: Book[];
  hasMore: boolean;
  page: string;
  limit: string;
};

export type BookDetailResponse = {
  data: Book;
};

export type BooksParams = {
  page?: number;
  limit?: number;
  text?: string;
};
