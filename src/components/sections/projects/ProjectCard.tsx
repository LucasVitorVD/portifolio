import { Card, CardContent } from "@/components/ui/card";
import type { HighlightProject } from "@/types/projects";
import Link from "next/link";

interface Props {
  projectData: HighlightProject
}

export default function ProjectCard({ projectData }: Props) {
  return (
    <Link href={projectData.liveProjectUrl ?? projectData.githubUrl} target="_blank">
      <Card
        className="rounded-none border border-black bg-cover bg-no-repeat bg-center group cursor-pointer"
        style={{ backgroundImage: `url(${projectData.thumbnail.url})` }}
      >
        <CardContent className="aspect-square p-0">
          <div className="flex flex-col items-start justify-end gap-4 size-full pb-3 bg-black/50 backdrop-grayscale container transition-all text-white group-hover:bg-transparent group-hover:backdrop-grayscale-0">
            <p className="text-lg font-bold group-hover:underline md:text-xl lg:text-2xl">
              {projectData.title}
            </p>
            <p className="text-xs line-clamp-3 md:text-sm lg:line-clamp-none">{projectData.shortDescription}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
