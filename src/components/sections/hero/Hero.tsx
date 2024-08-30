import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex items-center justify-center h-full py-20 lg:py-0">
      <div className="container flex flex-col items-center gap-12 lg:flex-row">
        <div>
          <p className="text-md md:text-2xl">Desenvolvedor Web</p>
          <div className="text-[2.75rem] leading-tight font-title lg:leading-[9rem] md:text-8xl lg:text-[9rem]">
            <h1>Desenvolvedor</h1>
            <p className="md:hollow-text lg:z-50 lg:relative lg:left-32">Web Full-Stack</p>
          </div>
          <p className="text-secondary mt-6 md:w-[600px] text-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sequi
            modi enim obcaecati sit et temporibus deserunt officiis quibusdam
            inventore? Placeat reprehenderit temporibus quas saepe id voluptatibus
            earum vel incidunt.
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
        <figure className="space-y-8">
          <img
            src="https://images.pexels.com/photos/27945902/pexels-photo-27945902/free-photo-of-bruxa-vermelha.jpeg?auto=compress&cs=tinysrgb&w=1280&h=650&dpr=1"
            alt="profile image"
            className="grayscale border border-black"
          />
          <figcaption className="text-secondary text-center uppercase font-bold italic">
            Prazer em te conhecer! <br />
            Como posso ajudar?
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
