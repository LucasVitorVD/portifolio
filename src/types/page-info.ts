import { Tech } from "./projects"
import type { RichTextContent } from "@graphcms/rich-text-types"

export interface Social {
  url: string,
  iconSvg: string
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
  socials: Social[]
}

export interface HomePageData {
  page: HomePageInfo
}