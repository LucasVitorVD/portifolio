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
    href: "#projetos"
  },
  {
    label: "Tecnologias",
    href: "#tech"
  },
  {
    label: "Sobre mim",
    href: "#sobre"
  },
]