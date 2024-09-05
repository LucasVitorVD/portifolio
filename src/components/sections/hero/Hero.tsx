import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";
import ProfilePhoto from "../../../../public/photos/IMG-20240127-WA0082.jpg";
import Link from "next/link";
import Image from "next/image";
import { HomePageInfo } from "@/types/page-info";
import RichText from "@/components/rich-text";
import CMSIcon from "@/components/cms-icon";

interface Props {
  homeInfo: HomePageInfo;
}

export default function Hero({ homeInfo }: Props) {
  return (
    <section className="flex items-center justify-center min-h-screen py-20 lg:py-0">
      <div className="container flex flex-col items-center gap-12 lg:flex-row">
        <div>
          <p className="text-md md:text-2xl">Desenvolvedor Web</p>
          <div className="text-[2.75rem] leading-tight font-title lg:leading-[9rem] md:text-8xl lg:text-[9rem]">
            <h1>Desenvolvedor</h1>
            <p className="md:hollow-text lg:z-10 lg:relative lg:translate-x-32">
              Web Full-Stack
            </p>
          </div>
          <div className="text-secondary mt-6 md:w-[600px] text-wrap">
            <RichText content={homeInfo.introduction.raw} />
          </div>
          <div className="flex flex-wrap items-center gap-8 mt-12">
            <Button asChild>
              <a href="#projects">Veja meus últimos projetos</a>
            </Button>
            <a
              href="#about"
              className="text-secondary uppercase underline underline-offset-4"
            >
              Sobre mim
            </a>
          </div>
        </div>
        <figure className="flex flex-col items-center gap-8">
          <div className="flex gap-2">
            <Image
              src={homeInfo.profilePicture.url}
              alt="profile image"
              width={450}
              height={400}
              className="grayscale border border-black transition-all hover:filter-none"
            />
            <div className="hidden md:flex flex-col gap-4 justify-end">
              {homeInfo.socials.map((social) => (
                <Link
                  href={social.url}
                  target="_blank"
                  rel="external"
                  className="bg-secondary text-primary p-2 rounded-full"
                >
                  <CMSIcon svgContent={social.iconSvg} />
                </Link>
              ))}
            </div>
          </div>
          <figcaption>
            <p className="text-secondary uppercase font-bold italic text-sm md:text-base">
              Prazer em te conhecer! <br />
              Como posso ajudar?
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
