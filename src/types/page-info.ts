import type { About } from "./about"
import type { HighlightProject } from "./projects"
import type { Social } from "./social"
import type { Tech } from "./tech"
import type { RichTextContent } from "@graphcms/rich-text-types"

export interface HomePageInfo {
  introduction: {
    raw: RichTextContent
  }
  frontendTecnology: Tech[]
  backendTecnology: Tech[]
  profilePicture: {
    url: string
  }
  socials: Social[],
  highlightProjects: HighlightProject[]
  about: About
}

export interface HomePageData {
  page: HomePageInfo
}