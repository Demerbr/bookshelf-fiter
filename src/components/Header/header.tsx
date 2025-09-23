import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="h-20 w-full justify-around bg-brand-dark flex items-center ">
        <h1 className="text-white font-bold text-2xl">Bookshelf</h1>
        <form >
            <div className="h-12 gap-0 flex w-fit ">

                <Input
                type="text"
                placeholder="Pesquisar Amazon.com.br"
                className=" bg-white w-64 rounded-r-none h-full border-none "
                />

                <Button
                type="submit"
                className="h-full w-12 rounded-l-none rounded-r-md border-none flex items-center justify-center"
                >
                    <Search />  
                </Button>
            </div>

        </form>
    </header>
  );
};