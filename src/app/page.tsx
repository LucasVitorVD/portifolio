import About from "@/components/sections/about/About";
import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/projects/Projects";
import Techs from "@/components/sections/techs/Techs";
import { fetchHygraphQuery } from "@/lib/actions";
import { HomePageData } from "@/types/page-info";

const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        frontendTecnology {
          name
          iconSvg
        }
        backendTecnology {
          name
          iconSvg
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
      }
    }
  `;

export default async function Home() {
  const { page: pageData }: HomePageData = await fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24
  );

  return (
    <main className="flex flex-col flex-1">
      <Hero homeInfo={pageData} />
      <Projects />
      <Techs
        frontEndTechs={pageData.frontendTecnology}
        backEndTechs={pageData.backendTecnology}
      />
      <About />
    </main>
  );
}
