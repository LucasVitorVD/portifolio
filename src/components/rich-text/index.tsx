import { RichText as CMSRichText } from '@graphcms/rich-text-react-renderer';
import { ComponentProps } from 'react';

interface RichTextProps extends ComponentProps<typeof CMSRichText> {}

export default function RichText({ ...props }: RichTextProps) {
  return <CMSRichText {...props} />
}