import Link from 'next/link'

import Image from '@components/images/Image'
import Paragraph from '@components/typography/Paragraph'

export type TBaseCardProps = {
  heading?: string
  subheading?: string
  image?: string
  href?: string
}

export type TCardProps<T = any> = TBaseCardProps & T

/**
 * A reusable card component.
 *
 * @param heading - The card heading
 * @param subheading - The card subheading
 * @param image - The card image
 * @param href - The card link
 * @param props - The props of the component
 * @returns The card component
 */
const Card = <T,>({
  heading = '',
  subheading = '',
  image = '#',
  href = '#',
  ...props
}: TCardProps<T>): JSX.Element => {
  return (
    <Link
      href={href}
      className="flex w-full items-center justify-between space-x-6 p-6"
      {...props}
    >
      <div className="flex-1 truncate">
        <div className="flex items-center space-x-3">
          <h3 className="truncate text-sm font-medium text-gray-900">
            {heading}
          </h3>
        </div>

        <Paragraph className="mt-1 truncate text-sm text-gray-500">
          {subheading}
        </Paragraph>
      </div>

      <Image
        className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
        src={image}
        width={40}
        height={40}
        alt={subheading || 'Card image'}
      />
    </Link>
  )
}

export default Card
