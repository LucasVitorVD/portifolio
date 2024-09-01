import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/projects/Projects";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <Projects />
    </main>
  );
}