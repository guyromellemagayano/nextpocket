import { FC } from 'react'

import { Card } from '@components'
import { IListProps } from '@interfaces'

/**
 * Renders a list of items with cards.
 * @param {boolean} ordered - Whether the list should be ordered or not.
 * @param {Array} data - An array of objects containing the data to be rendered.
 * @returns {JSX.Element} - A JSX element representing the list.
 */
const List: FC<IListProps> = ({
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
