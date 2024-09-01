import { Card, CardContent } from "@/components/ui/card";

export default function ProjectCard() {
  return (
    <Card 
      className="rounded-none border border-black bg-[url('https://images.pexels.com/photos/7120851/pexels-photo-7120851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat bg-center group cursor-pointer"
    >
      <CardContent className="aspect-square p-0">
        <div className="flex flex-col items-start justify-end size-full bg-black/50 backdrop-grayscale container transition-all text-white group-hover:bg-black/40">
          <p className="text-2xl font-bold group-hover:underline">
            Nome do projeto
          </p>
          <p className="text-xl">Tecnologias:</p>
        </div>
      </CardContent>
    </Card>
  );
}
