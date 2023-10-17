import { FC } from 'react'

import { TParagraphProps } from '@types'

/**
 * Paragraph component that renders a <p> tag with a message.
 */
const Paragraph: FC<TParagraphProps> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  )
}

export default Paragraph
