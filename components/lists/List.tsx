'use client'

import { FC } from 'react'

import { Card } from '@components'
import { TListProps } from '@types'

/**
 * Renders a list of items with cards.
 */
const List: FC<TListProps> = ({
  ordered = false,
  data = [],
  ...props
}): JSX.Element => {
  const renderList = data.map(({ id, company, avatar, title }) => {
    const notesLink = `/notes/${id}`

    return (
      <li
        key={id}
        className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
      >
        <Card
          heading={company}
          subheading={title}
          image={avatar}
          href={notesLink}
        />
      </li>
    )
  })

  if (data.length === 0) return null

  return ordered ? (
    <ol {...props}>{renderList}</ol>
  ) : (
    <ul {...props}>{renderList}</ul>
  )
}

export default List
