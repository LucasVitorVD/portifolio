import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/projects/Projects";
import Techs from "@/components/sections/techs/Techs";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <Projects />
      <Techs />
    </main>
  );
}