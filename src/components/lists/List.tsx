import { FC, HTMLAttributes } from 'react'

import Card from '@components/cards/Card'
import { TRequestData } from '@helpers/request'
import { TNotesPageNotesData } from 'configs/data'

type TListProps = HTMLAttributes<HTMLUListElement | HTMLOListElement> & {
  data: TNotesPageNotesData[]
  ordered?: boolean
  [key: string]: any
}

/**
 * Renders a list of items with cards.
 *
 * @param data - The list data.
 * @param ordered - The list type.
 * @param props - The list props.
 * @returns A list element.
 */
const List: FC<TListProps> = ({ ordered = false, data = [], ...props }) => {
  const renderList = data.map(
    ({ id, company, avatar, title }: TRequestData) => {
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
    }
  )

  if (data.length === 0) return null

  return ordered ? (
    <ol {...props}>{renderList}</ol>
  ) : (
    <ul {...props}>{renderList}</ul>
  )
}

export default List
