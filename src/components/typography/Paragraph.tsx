import { FC, HTMLAttributes, ReactNode, Ref } from 'react'

type TParagraphProps = HTMLAttributes<HTMLParagraphElement> &
  HTMLAttributes<MouseEvent> & {
    [key: string]: any
    children?: ReactNode
    ref?: Ref<HTMLParagraphElement>
  }

/**
 * Paragraph component that renders a <p> tag with a message.
 *
 * @param children - The paragraph children.
 * @param props - The paragraph props.
 * @returns A paragraph element.
 */
const Paragraph: FC<TParagraphProps> = ({ children, ...props }) => {
  return <p {...props}>{children}</p>
}

export default Paragraph
