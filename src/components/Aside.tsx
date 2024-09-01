"use client"

import { MoveDown, MoveUp } from "lucide-react";
import { navLinks } from "@/lib/utils";
import Link from "next/link";
import { useRef } from "react";

export default function Aside() {
  const pos = useRef(0)

  const handleChangePosition = (method: "increase" | "decrease") => {
    if (pos.current >= navLinks.length - 1) {
      return
    }

    if (method === "increase") {
      pos.current += 1
    }

    if (method === "decrease") {
      pos.current -= 1
    }

    console.log(navLinks[pos.current])
    console.log(pos)
  }

  return (
    <aside className="hidden lg:flex flex-col justify-between w-16 border-r-2 border-secondary bg-primary fixed left-0 z-50 h-full">
      <button className="py-6 border-b-2 border-secondary" onClick={() => handleChangePosition("decrease")}>
        <MoveUp className="mx-auto text-secondary size-5" />
      </button>
      <button className="py-6 border-t-2 border-secondary" onClick={() => handleChangePosition("increase")}>
        <MoveDown className="mx-auto text-secondary size-5" />
      </button>
    </aside>
  );
}
