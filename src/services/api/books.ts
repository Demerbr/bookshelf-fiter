import { BookDetailResponse, BooksListResponse, BooksParams } from "../types/book";
import api from "./axios";

async function list(params: BooksParams = {}): Promise<BooksListResponse> {
  const { page = 1, limit = 4, text, sortBy, sortOrder } = params;
  
  const searchParams = new URLSearchParams();
  searchParams.append("page", String(page));
  searchParams.append("limit", String(limit));
  
  if (text) searchParams.append("text", text);
  if (sortBy) searchParams.append("sortBy", sortBy);
  if (sortOrder) searchParams.append("sortOrder", sortOrder);

  const { data } = await api.get<BooksListResponse>(`/books?${searchParams.toString()}`);
  return data;
}

async function getById(id: string): Promise<BookDetailResponse> {
  const { data } = await api.get<BookDetailResponse>(`/books/${id}`);
  return data;
}

export const booksApi = {
  list,
  getById,
};
