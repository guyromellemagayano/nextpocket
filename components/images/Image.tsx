import type { ImageProps } from 'next/image'
import NextImage from 'next/image'

/**
 * A component that renders an optimized image using Next.js Image component.
 *
 * @param props - The image props.
 * @returns An image element.
 */
const Image = ({ ...props }: ImageProps): JSX.Element => (
  <NextImage {...props} />
)

export default Image
