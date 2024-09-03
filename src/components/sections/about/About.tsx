import Image from "next/image";
import ProfilePhoto from "../../../../public/photos/IMG-20240127-WA0120.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const educationList = [
  {
    institutionLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3VUXs6qaG0GEAUc7b45gpHwiNKQmDafGzgw&s",
    name: "Análise de Desenvolvimento de Software - Universidade Católica de Brasília",
  },
  {
    institutionLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSyVTrzHrvzosdkgi4efTy1t7b5MctOuXwYA&s",
    name: "Desenvolvedor Javascript Full-stack - OneBitCode",
  },
  {
    institutionLogo: "https://cdn.icon-icons.com/icons2/2699/PNG/512/udemy_logo_icon_168372.png",
    name: "Desenvolvedor Java com o professor Nélio Alves - Udemy",
  },
]

const languagesList = [
  {
    logo: "https://cdn.icon-icons.com/icons2/2087/PNG/512/brazil_icon_127818.png",
    name: "Português - Fluente"
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/206/206626.png",
    name: "Inglês - Intermediário"
  }
]

export default function About() {
  return (
    <section className="pb-20" id="about">
      <div className="container flex flex-col space-y-10">
        <div className="leading-tight lg:leading-[9rem]">
          <p className="text-md md:text-2xl">Conheça mais</p>
          <h2 className="text-[2.75rem] md:hollow-text md:text-8xl lg:text-[9rem]">
            SOBRE MIM
          </h2>
        </div>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start">
          <figure>
            <Image
              src={ProfilePhoto}
              alt="profile image"
              width={450}
              height={400}
              className="grayscale border border-black transition-all hover:filter-none"
            />
          </figure>

          <div className="flex flex-col flex-1 gap-6">
            <div className="space-y-4">
              <p>
                Olá, me chamo <strong>Lucas</strong> sou um <strong>desenvolvedor web full-stack júnior</strong>,
                em busca da minha <strong>primeira experiência profissional</strong> na área.
                Tenho sólidos conhecimentos em <strong>React</strong> e <strong>TypeScript</strong> no front-end,
                e em <strong>Java</strong>, <strong>Spring Boot</strong> e <strong>MySQL</strong> no back-end. Já apliquei essas
                habilidades em projetos como o <strong>RIFT</strong>.
              </p>
              <p>
                Atualmente, estou cursando o <strong>
                  último semestre de Análise e
                  Desenvolvimento de Software
                </strong> na Universidade Católica de
                Brasília. Além dos estudos formais, me dedico a aprender
                continuamente por meio de <strong>documentações</strong> e <strong>cursos online</strong> que
                proporcionaram os conhecimentos que possuo hoje.
              </p>
              <p>
                Meu objetivo é <strong>crescer profissionalmente</strong> através de <strong>contribuições significativas</strong> para a empresa, enfrentando <strong>desafios</strong> e construindo um forte <strong>networking</strong> com meus colegas de
                trabalho. Estou sempre disposto a colaborar e a compartilhar o
                que vou aprendendo ao longo da minha jornada.
              </p>
              <p>
                Entre as minhas principais qualidades, destaco a <strong>comunicação eficaz</strong>, a <strong>curiosidade</strong> e a <strong>vontade constante de aprender</strong>, a <strong>capacidade de resolver problemas</strong> e a <strong>paciência</strong>.
              </p>
            </div>

            <Accordion type="multiple">
              <AccordionItem
                value="item-2"
                className="bg-secondary text-primary"
              >
                <AccordionTrigger className="px-2">Educação</AccordionTrigger>
                <AccordionContent className="px-2">
                  <ul className="space-y-4">
                    {educationList.map((item) => (
                      <li key={item.name} className="flex items-center gap-4">
                        <figure className="size-8">
                          <img src={item.institutionLogo} alt="logo da instituição" className="w-full h-auto rounded-full" />
                        </figure>
                        {item.name}
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
                    {languagesList.map((item) => (
                      <li key={item.name} className="flex items-center gap-4">
                        <figure className="size-8">
                          <img src={item.logo} alt="logo da instituição" className="w-full h-auto rounded-full" />
                        </figure>
                        {item.name}
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
