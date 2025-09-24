import { SearchComponent } from "@/components/Search";

interface HeaderProps {
  onSearch?: (query: string) => void;
  onClear?: () => void;
  searchValue?: string;
}

export const Header = ({ onSearch, onClear, searchValue }: HeaderProps) => {
  return (
    <header className="h-20 w-full justify-around bg-brand-dark flex items-center">
      <h1 className="text-white font-bold text-2xl">Bookshelf</h1>
      {onSearch && (
        <SearchComponent 
          onSearch={onSearch}
          onClear={onClear}
          placeholder="Pesquisar Amazon.com.br"
          value={searchValue || ""}
        />
      )}
    </header>
  );
};