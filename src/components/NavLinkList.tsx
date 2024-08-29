import { navLinks } from "@/lib/utils";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLUListElement> {}

export default function NavLinkList(props: Props) {
  return (
    <ul {...props} className={cn("flex gap-6 text-muted", props.className)}>
      {navLinks.map((navLink) => (
        <Link key={navLink.label} href={navLink.href}>
          {navLink.label}
        </Link>
      ))}
    </ul>
  );
}
