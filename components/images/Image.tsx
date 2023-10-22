import type { ImageProps } from 'next/image'
import NextImage from 'next/image'
import { FC } from 'react'

/**
 * A component that renders an optimized image using Next.js Image component.
 *
 * @param props - The image props.
 * @returns An image element.
 */
const Image: FC<ImageProps> = ({ ...props }) => <NextImage {...props} />

export default Image
