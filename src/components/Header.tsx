import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
import NavLinkList from "./NavLinkList";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 border-b-2 border-secondary bg-primary w-full py-4">
      <div className="container flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-secondary font-bold uppercase">Lucas</h1>
        </div>
        <nav className="hidden lg:flex flex-1 items-center justify-end gap-12">
          <NavLinkList />
          <Button asChild>
            <Link href="#" className={buttonVariants({ variant: "default" })}>
              Entrar em contato
            </Link>
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu className="text-secondary" />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-6 bg-primary">
            <NavLinkList className="flex-col" />
        
            <Link href="#" className="underline">
              Entrar em contato
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
