import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { Book } from "@/services/types/book";

export function useBookDetailQuery(id: string) {
  return useQuery<Book>({
    queryKey: ["book-detail", id],
    queryFn: async (): Promise<Book> => {
      try {
        const response = await api.books.getById(id);
        return response.data;
      } catch {
        // Fallback para evitar quebra da UI
        return {
          id: "",
          name: "Erro ao carregar livro",
          authors: [],
          description: "",
          imagelink: "",
          publishedat: "",
          createdat: "",
          searchable: "",
          price: "0",
        };
      }
    },
    enabled: !!id, // Só executa se tiver ID
    staleTime: 10 * 60 * 1000, // 10 minutos (detalhes mudam menos)
  });
}
