import { FC } from 'react'

import { IParagraphProps } from '@interfaces'

/**
 * Paragraph component that renders a <p> tag with a message.
 */
const Paragraph: FC<IParagraphProps> = ({
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
