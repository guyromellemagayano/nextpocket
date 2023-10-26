import { FC, HTMLAttributes, ReactNode, Ref } from 'react'

type TMessageProps = HTMLAttributes<HTMLDivElement> & {
  ref?: Ref<HTMLDivElement>
  children?: ReactNode
  [key: string]: any
}

/**
 * A message component that displays a loading message.
 *
 * @param children - The message children.
 * @param props - The message props.
 * @returns A message element.
 */
const Message: FC<TMessageProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>
}

export default Message
