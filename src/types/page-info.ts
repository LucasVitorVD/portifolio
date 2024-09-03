import { Tech } from "./projects"
import type { RichTextContent } from "@graphcms/rich-text-types"

export interface Social {
  url: string,
  iconSvg: string
}

export interface HighlightProject {
  slug: string
  thumbnail: {
    url: string
  }
  title: string
  shortDescription: string
  description: string
  frontendTecnology: Tech[]
  backendTecnology: Tech[]
  githubUrl: string
  liveProjectUrl: string
}

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
}

export interface HomePageData {
  page: HomePageInfo
}