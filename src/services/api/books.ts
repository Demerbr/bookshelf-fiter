import { BookDetailResponse, BooksListResponse, BooksParams } from "../types/book";
import api from "./axios";

async function list(params: BooksParams = {}): Promise<BooksListResponse> {
  const { page = 1, limit = 5, text } = params;
  
  const searchParams = new URLSearchParams();
  searchParams.append("page", String(page));
  searchParams.append("limit", String(limit));
  
  if (text) searchParams.append("text", text);

  const { data } = await api.get<BooksListResponse>(`/books?${searchParams.toString()}`);
  return data;
}

async function getById(id: string): Promise<BookDetailResponse> {
  const { data } = await api.get<BookDetailResponse>(`/books/${id}`);
  return data;
}

// API Client tipado
export const booksApi = {
  list,
  getById,
};
