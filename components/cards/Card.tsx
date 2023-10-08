import { FC } from 'react'

import Link from 'next/link'

import { Image, Paragraph } from '@components'
import { ICardProps } from '@interfaces'

/**
 * Renders a card component.
 * @param {ICardProps} props - component props
 * @returns {JSX.Element} - rendered component
 */
const Card: FC<ICardProps> = ({
  heading,
  subheading,
  image,
  href = '#',
}): JSX.Element => {
  return (
    <Link
      href={href}
      className="flex w-full items-center justify-between space-x-6 p-6"
    >
      <div className="flex-1 truncate">
        <div className="flex items-center space-x-3">
          <h3 className="truncate text-sm font-medium text-gray-900">
            {heading}
          </h3>
        </div>
        <Paragraph
          className="mt-1 truncate text-sm text-gray-500"
          message={subheading}
        />
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
