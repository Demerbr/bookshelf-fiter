import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function BookDetailBreadcrumb() {
  return (
    <nav className="mb-6">
      <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm">
        <ArrowLeft className="w-4 h-4 mr-1" />
        Voltar para Livros
      </Link>
    </nav>
  );
}
