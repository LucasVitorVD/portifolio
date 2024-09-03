import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Tech } from "@/types/projects";
import { BadgeCheck } from "lucide-react";

interface Props {
  frontEndTechs: Tech[],
  backEndTechs: Tech[]
}

export default function Techs({ frontEndTechs, backEndTechs }: Props) {
  return (
    <section className="pb-20" id="techs">
      <div className="container flex flex-col space-y-10">
        <div className="leading-tight lg:leading-[9rem]">
          <p className="text-md md:text-2xl">Minhas</p>
          <h2 className="text-[2.75rem] md:hollow-text md:text-8xl lg:text-[9rem]">
            TECNOLOGIAS
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <Card className="bg-secondary border-2 text-primary rounded-none shadow-none transition-all  hover:shadow-3xl hover:-translate-x-2 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-xl text-center md:text-3xl">
                Desenvolvimento Front-End
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ul className="grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-20">
                {frontEndTechs && frontEndTechs.map((tech) => (
                  <li
                    key={tech.name}
                    className="flex items-center gap-3 text-lg md:text-xl"
                  >
                    <BadgeCheck className="bg-primary text-secondary rounded-full" />
                    {tech.name}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-secondary border-2 text-primary rounded-none shadow-none transition-all  hover:shadow-3xl hover:-translate-x-2 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-xl text-center md:text-3xl">
                Desenvolvimento Back-End
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ul className="grid grid-cols-2 gap-x-20 gap-y-6 list-outside">
                {backEndTechs && backEndTechs.map((tech) => (
                  <li
                    key={tech.name}
                    className="flex items-center gap-3 text-lg md:text-xl"
                  >
                    <BadgeCheck className="bg-primary text-secondary rounded-full" />
                    {tech.name}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
