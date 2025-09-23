import { Button } from "@/components/ui/button";
import { BookDetailPageProps } from "@/interfaces/bookDetailPageProps";
import { useBookDetailQuery } from "@/queries";
import { ArrowLeft, Heart, RotateCcw, Share2, Shield, Star, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



export const BookDetailModule = ({ params }: BookDetailPageProps) => {
    const { data: book, isLoading, isError } = useBookDetailQuery(params.id);

    // Extrair ano da data de publicação
    const publishedYear = book ? new Date(book.publishedat).getFullYear() : null;
    
    // Formatar autores (múltiplos autores)
    const authorsText = book?.authors && book.authors.length > 1 
      ? book.authors.join(', ') 
      : book?.authors?.[0] || '';
  
    // Limpar URL da imagem (remover caracteres extras)
    const cleanImageUrl = book?.imagelink?.replace(/\]$/, '') || '';
  
    if (isLoading) {
      return (
        <div className="bg-gray-50 min-h-screen">
          <div className="container mx-auto px-4 py-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="h-96 bg-gray-200 rounded"></div>
                <div className="space-y-4">
                  <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-32 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  
    if (isError || !book) {
      return (
        <div className="bg-gray-50 min-h-screen">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-red-600 mb-4">
                Erro ao carregar livro
              </h1>
              <p className="text-gray-600 mb-6">
                O livro solicitado não foi encontrado.
              </p>
              <Link href="/">
                <Button>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar para Início
                </Button>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Voltar para Livros
            </Link>
          </nav>
  
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Imagem do livro */}
              <div className="space-y-4">
                <div className="aspect-[2/3] overflow-hidden rounded-lg bg-gray-100">
                  {cleanImageUrl ? (
                    <Image 
                      src={cleanImageUrl} 
                      alt={book.name}
                      width={400}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <span className="text-gray-500 text-lg">Sem capa disponível</span>
                    </div>
                  )}
                </div>
                
                {/* Miniaturas (simuladas) */}
                <div className="flex space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-16 h-20 bg-gray-200 rounded border-2 border-transparent hover:border-blue-500 cursor-pointer"></div>
                  ))}
                </div>
              </div>
  
              {/* Informações do livro */}
              <div className="space-y-6">
                {/* Título e autor */}
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{book.name}</h1>
                  <p className="text-lg text-blue-600 hover:text-blue-800 cursor-pointer">
                    por {authorsText}
                  </p>
                </div>
  
                {/* Avaliações */}
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-blue-600 hover:text-blue-800 cursor-pointer text-sm">
                    (4.5) • 1.234 avaliações
                  </span>
                </div>
  
                {/* Preço */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl font-bold text-gray-900">R$ 29,90</span>
                    <span className="text-lg text-gray-500 line-through">R$ 39,90</span>
                    <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded">25% OFF</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Economize R$ 10,00 (25%)
                  </p>
                </div>
  
                {/* Detalhes do produto */}
                <div className="border-t pt-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Detalhes do produto</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Ano de Publicação:</span>
                      <span className="ml-2 font-medium">{publishedYear}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Autores:</span>
                      <span className="ml-2 font-medium">{book.authors.length}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Data de Criação:</span>
                      <span className="ml-2 font-medium">
                        {new Date(book.createdat).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">ID:</span>
                      <span className="ml-2 font-medium text-xs">{book.id}</span>
                    </div>
                  </div>
                </div>
  
                {/* Botões de ação */}
                <div className="space-y-3">
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 rounded-md">
                    Adicionar ao Carrinho
                  </Button>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      <Heart className="w-4 h-4 mr-2" />
                      Lista de Desejos
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share2 className="w-4 h-4 mr-2" />
                      Compartilhar
                    </Button>
                  </div>
                </div>
  
                {/* Informações de entrega */}
                <div className="border-t pt-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Truck className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-gray-600">
                        <span className="font-medium text-green-600">Frete GRÁTIS</span> para pedidos acima de R$ 99
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-600">
                        Compra protegida com garantia de 30 dias
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RotateCcw className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-600">
                        Devolução gratuita em até 7 dias
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Descrição */}
            {book.description && (
              <div className="border-t mt-8 pt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sinopse</h3>
                <p className="text-gray-700 leading-relaxed">{book.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );

}