import { HighlightProject } from "@/types/page-info";
import ProjectsCarousel from "./ProjectsCarousel";

interface Props {
  highlightProjects: HighlightProject[]
}

export default function Projects({ highlightProjects }: Props) {
  return (
    <section className="pb-20" id="projects">
      <div className="container flex flex-col space-y-10">
        <div className="leading-tight lg:leading-[9rem]">
          <p className="text-md md:text-2xl">Meus últimos</p>
          <h2 className="text-[2.75rem] md:hollow-text md:text-8xl lg:text-[9rem]">PROJETOS</h2>
        </div>

        <ProjectsCarousel projects={highlightProjects} />
      </div>
    </section>
  )
}
