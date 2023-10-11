import { FC } from 'react'

import type { ImageProps } from 'next/image'
import NextImage from 'next/image'

/**
 * A component that renders an optimized image using Next.js Image component.
 */
const Image: FC<ImageProps> = ({ ...props }): JSX.Element => (
  <NextImage {...props} />
)

export default Image
