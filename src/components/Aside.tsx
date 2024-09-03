"use client"

import { MoveDown, MoveUp } from "lucide-react";
import { navLinks } from "@/lib/utils";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function Aside() {
  const router = useRouter()
  const [pos, setPos] = useState(0)

  const handleChangePosition = (method: "increase" | "decrease") => {
    if (method === "increase" && pos < navLinks.length - 1) {
      setPos((value) => value + 1)
    } else if (method === "decrease" && pos > 0) {
      setPos((value) => value - 1)
    } else {
      return;
    }

    router.push(`${navLinks[pos].href}`)
  }

  return (
    <aside className="hidden lg:flex flex-col justify-between w-16 border-r-2 border-secondary bg-primary fixed left-0 z-50 h-full">
      <button className="py-6 border-b-2 border-secondary transition-all disabled:opacity-60" onClick={() => handleChangePosition("decrease")} disabled={pos <= 0}>
        <MoveUp className="mx-auto text-secondary size-5" />
      </button>
      <button className="py-6 border-t-2 border-secondary transition-all disabled:opacity-60" onClick={() => handleChangePosition("increase")} disabled={pos >= navLinks.length - 1}>
        <MoveDown className="mx-auto text-secondary size-5" />
      </button>
    </aside>
  );
}
