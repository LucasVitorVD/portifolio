import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { About as AboutInterface } from "@/types/about";
import RichText from "@/components/rich-text";

interface Props {
  aboutInfo: AboutInterface
}

export default function About({ aboutInfo }: Props) {
  return (
    <section className="pb-20" id="about">
      <div className="container flex flex-col space-y-10">
        <div className="leading-tight lg:leading-[9rem]">
          <p className="text-md md:text-xl">Conheça mais</p>
          <h2 className="text-3xl md:hollow-text md:text-8xl lg:text-[9rem]">
            SOBRE MIM
          </h2>
        </div>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start">
          <figure>
            <Image
              src={aboutInfo.profileImage.url}
              alt="profile image"
              width={450}
              height={400}
              className="grayscale border border-black transition-all hover:filter-none"
            />
          </figure>

          <div className="flex flex-col flex-1 gap-6">
            <div className="space-y-4 text-justify leading-relaxed hyphens-auto">
              <RichText content={aboutInfo.text.raw} />
            </div>

            <Accordion type="multiple">
              <AccordionItem
                value="item-2"
                className="bg-secondary text-primary"
              >
                <AccordionTrigger className="px-2">Educação</AccordionTrigger>
                <AccordionContent className="px-2">
                  <ul className="space-y-4">
                    {aboutInfo.educations.map((education) => (
                      <li key={education.institutionName} className="flex items-center gap-4">
                        <figure className="size-8">
                          <img src={education.institutionIcon} alt="logo da instituição" className="w-full h-auto rounded-full" />
                        </figure>
                        {education.institutionName}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-1"
                className="bg-secondary text-primary"
              >
                <AccordionTrigger className="px-2">Línguas</AccordionTrigger>
                <AccordionContent className="px-2">
                  <ul className="space-y-4">
                    {aboutInfo.languages.map((language) => (
                      <li key={language.name} className="flex items-center gap-4">
                        <figure className="size-8">
                          <img src={language.languageIcon} alt="logo da instituição" className="w-full h-auto rounded-full" />
                        </figure>
                        {language.name}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
