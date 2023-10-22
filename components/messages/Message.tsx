import { FC, HTMLAttributes, Ref } from 'react'

import { TCommonComponentProps } from '@components'

type TMessageProps = HTMLAttributes<HTMLDivElement> &
  TCommonComponentProps & {
    ref?: Ref<HTMLDivElement>
  }

/**
 * A message component that displays a loading message.
 *
 * @param children - The message children.
 * @param className - The CSS class name for the message.
 * @param props - The message props.
 * @returns A message element.
 */
const Message: FC<TMessageProps> = ({ className, children, ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export default Message
