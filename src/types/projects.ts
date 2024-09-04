import type { Tech } from "./tech"

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