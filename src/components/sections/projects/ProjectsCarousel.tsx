"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import ProjectCard from "./ProjectCard";
import { HighlightProject } from "@/types/page-info";

interface Props {
  projects: HighlightProject[]
}

export default function ProjectsCarousel({ projects }: Props) {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true
      }}
      className="w-full max-w-xs md:max-w-lg lg:max-w-full mx-auto"
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <ProjectCard projectData={project} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:block" />
      <CarouselNext className="hidden md:block" />
    </Carousel>
  );
}
