import { FC } from 'react'

import { IParagraphProps } from '@interfaces'

/**
 * Paragraph component that renders a <p> tag with a message.
 * @param message - The message to be displayed in the paragraph.
 * @param props - Additional props to be spread on the <p> tag.
 * @returns A JSX.Element representing a paragraph with the given message.
 */
const Paragraph: FC<IParagraphProps> = ({
  message = '',
  ...props
}): JSX.Element => {
  return <p {...props}>{message}</p>
}

export default Paragraph
