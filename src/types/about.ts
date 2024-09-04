import type { RichTextContent } from "@graphcms/rich-text-types"

interface Education {
  institutionIcon: string
  institutionName: string
}

interface Language {
  languageIcon: string
  name: string
}

export interface About {
  profileImage: {
    url: string
  }
  text: {
    raw: RichTextContent
  }
  educations: Education[]
  languages: Language[]
}