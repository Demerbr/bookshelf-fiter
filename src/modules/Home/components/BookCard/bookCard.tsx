import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Star, Heart } from "lucide-react";
import { Book } from "@/services/types/book";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  // Extrair ano da data de publicação
  const publishedYear = new Date(book.publishedat).getFullYear();
  
  // Formatar autores (múltiplos autores)
  const authorsText = book.authors.length > 1 
    ? book.authors.join(', ') 
    : book.authors[0];

  // Limpar URL da imagem (remover caracteres extras)
  const cleanImageUrl = book.imagelink?.replace(/\]$/, '') || '';

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 group">
      {/* Imagem do livro */}
      <div className="relative mb-3">
        <Link href={`/books/${book.id}`}>
          <div className="aspect-[2/3] overflow-hidden rounded-md bg-gray-100">
            {cleanImageUrl ? (
              <Image 
                src={cleanImageUrl} 
                alt={book.name}
                width={200}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span className="text-gray-400 text-sm">Sem capa</span>
              </div>
            )}
          </div>
        </Link>
        
        {/* Botão de favorito */}
        <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
          <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
        </button>
      </div>

      {/* Informações do livro */}
      <div className="space-y-2">
        {/* Título */}
        <Link href={`/books/${book.id}`}>
          <h3 className="font-medium text-sm text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors leading-tight">
            {book.name}
          </h3>
        </Link>

        {/* Autor */}
        <p className="text-xs text-gray-600 line-clamp-1">
          por {authorsText}
        </p>

        {/* Ano de publicação */}
        <p className="text-xs text-gray-500">
          {publishedYear}
        </p>

        {/* Avaliações (simuladas) */}
        <div className="flex items-center space-x-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-xs text-gray-500">(4.5)</span>
        </div>

        {/* Preço (simulado) */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-900">R$ 29,90</span>
          <span className="text-sm text-gray-500 line-through">R$ 39,90</span>
        </div>

        {/* Botão de adicionar ao carrinho */}
        <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium text-sm py-2 rounded-md transition-colors">
          Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  );
}
