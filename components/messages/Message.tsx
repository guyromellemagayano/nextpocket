import { HTMLAttributes } from 'react'

import { TBaseCommonProps } from 'types/base'

export type TMessageProps<T = any> = HTMLAttributes<HTMLDivElement> &
  Omit<TBaseCommonProps, 'ref'> &
  T & {
    ref?: React.Ref<HTMLDivElement>
  }

/**
 * A message component that displays a loading message.
 *
 * @param children - The message children.
 * @param props - The message props.
 * @returns A message element.
 */
const Message = <T,>({ children, ...props }: TMessageProps<T>) => {
  return <div {...props}>{children}</div>
}

export default Message
