"use client"

import { MoveDown, MoveUp } from "lucide-react";
export default function Aside() {
  return (
    <aside className="hidden lg:flex flex-col justify-between w-16 border-r-2 border-secondary bg-primary fixed left-0 z-50 h-full">
      {/* TODO: FIX LOGIC */}

      {/* <button className="py-6 border-b-2 border-secondary transition-all disabled:opacity-60" onClick={() => handleChangePosition("decrease")} disabled={pos <= 0}>
        <MoveUp className="mx-auto text-secondary size-5" />
      </button>
      <button className="py-6 border-t-2 border-secondary transition-all disabled:opacity-60" onClick={() => handleChangePosition("increase")} disabled={pos >= navLinks.length - 1}>
        <MoveDown className="mx-auto text-secondary size-5" />
      </button> */}

      {/* MOCK BUTTONS */}
      <button className="py-[2.11rem] border-b-2 border-secondary transition-all disabled:opacity-60">
        <MoveUp className="hidden" />
      </button>
      <button className="py-[2.11rem] border-t-2 border-secondary transition-all disabled:opacity-60">
        <MoveDown className="hidden" />
      </button>
    </aside>
  );
}
