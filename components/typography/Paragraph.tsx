import { HTMLAttributes, Ref } from 'react'

import { TBaseCommonProps } from 'types/base'

export type TParagraphProps<T = any> = HTMLAttributes<HTMLParagraphElement> &
  HTMLAttributes<MouseEvent> &
  Omit<TBaseCommonProps, 'ref'> &
  T & {
    ref?: Ref<HTMLParagraphElement>
  }

/**
 * Paragraph component that renders a <p> tag with a message.
 *
 * @param children - The paragraph children.
 * @param props - The paragraph props.
 * @returns A paragraph element.
 */
const Paragraph = <T,>({ children, ...props }: TParagraphProps<T>) => {
  return <p {...props}>{children}</p>
}

export default Paragraph
