import { FC } from 'react'

import NextImage from 'next/image'

import { IImageProps } from '@interfaces'

/**
 * A component that renders an optimized image using Next.js Image component.
 * @param {string} src - The URL of the image.
 * @param {string} alt - The alternative text for the image.
 * @param {number} width - The width of the image.
 * @param {number} height - The height of the image.
 * @param {object} props - Additional props to pass to the Next.js Image component.
 * @returns {JSX.Element} - The rendered Image component.
 */
const Image: FC<IImageProps> = ({
  src = '#',
  alt = 'Placeholder image',
  width = 0,
  height = 0,
  ...props
}): JSX.Element => (
  <NextImage src={src} alt={alt} width={width} height={height} {...props} />
)

export default Image
