import { FC, HTMLAttributes, Ref } from 'react'

import { TCommonComponentProps } from '@components'

type TParagraphProps = HTMLAttributes<HTMLParagraphElement> &
  HTMLAttributes<MouseEvent> &
  TCommonComponentProps & {
    ref?: Ref<HTMLParagraphElement>
  }

/**
 * Paragraph component that renders a <p> tag with a message.
 */
const Paragraph: FC<TParagraphProps> = ({ children, className, ...props }) => {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  )
}

export default Paragraph
