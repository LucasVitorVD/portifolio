import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
import NavLinkList from "./NavLinkList";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-12 py-4 z-10 sticky top-0 border-b-2 border-secondary lg:justify-normal">
      <div>
        <h1 className="text-2xl">Lucas</h1>
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
    </header>
  );
}
