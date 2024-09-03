interface Props {
  svgContent: string
}

export default function CMSIcon({ svgContent }: Props) {
  return (
    <div dangerouslySetInnerHTML={{ __html: svgContent }} />
  )
}
