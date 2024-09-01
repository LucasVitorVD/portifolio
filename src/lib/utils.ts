import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navLinks = [
  {
    label: "Início",
    href: "/"
  },
  {
    label: "Projetos",
    href: "#projects"
  },
  {
    label: "Tecnologias",
    href: "#techs"
  },
  {
    label: "Sobre mim",
    href: "#about"
  },
]