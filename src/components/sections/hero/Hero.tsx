import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";
import ProfilePhoto from "../../../../public/photos/IMG-20240127-WA0082.jpg"
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex items-center justify-center h-full py-20 lg:py-0">
      <div className="container flex flex-col items-center gap-12 lg:flex-row">
        <div>
          <p className="text-md md:text-2xl">Desenvolvedor Web</p>
          <div className="text-[2.75rem] leading-tight font-title lg:leading-[9rem] md:text-8xl lg:text-[9rem]">
            <h1>Desenvolvedor</h1>
            <p className="md:hollow-text lg:z-50 lg:relative lg:left-32">
              Web Full-Stack
            </p>
          </div>
          <p className="text-secondary mt-6 md:w-[600px] text-wrap">
            Sou um desenvolvedor <strong>full-stack</strong>, dedicado a aprender e crescer na área da tecnologia, com foco em criar soluções inovadoras que proporcionem experiências incríveis aos usuários!
          </p>
          <div className="flex flex-wrap items-center gap-8 mt-12">
            <Button asChild>
              <a href="#projetos">Veja meus últimos projetos</a>
            </Button>
            <a
              href="#sobre"
              className="text-secondary uppercase underline underline-offset-4"
            >
              Sobre mim
            </a>
          </div>
        </div>
        <figure className="flex flex-col items-center gap-8">
          <div className="flex gap-2">
            <Image
              src={ProfilePhoto}
              alt="profile image"
              width={450}
              height={400}
              className="grayscale border border-black"
            />
            <div className="hidden md:flex flex-col gap-4 justify-end">
              <Link
                href="https://www.linkedin.com/in/lucasvvicente/"
                target="_blank"
                rel="external"
                className="bg-secondary text-primary p-2 rounded-full"
              >
                <Linkedin />
              </Link>

              <Link
                href="https://github.com/LucasVitorVD"
                target="_blank"
                rel="external"
                className="bg-secondary text-primary p-2 rounded-full"
              >
                <Github />
              </Link>
            </div>
          </div>
          <figcaption>
            <p className="text-secondary uppercase font-bold italic">
              Prazer em te conhecer! <br />
              Como posso ajudar?
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
