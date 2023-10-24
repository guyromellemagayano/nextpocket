import { FC, HTMLAttributes, ReactNode, Ref } from 'react'

type THeadingProps = HTMLAttributes<HTMLHeadingElement> &
  HTMLAttributes<MouseEvent> & {
    [key: string]: any
    ref?: Ref<HTMLHeadingElement>
    children?: ReactNode
    size?:
      | 'h1'
      | 'H1'
      | 'h2'
      | 'H2'
      | 'h3'
      | 'H3'
      | 'h4'
      | 'H4'
      | 'h5'
      | 'H5'
      | 'h6'
      | 'H6'
  }

/**
 * Heading component that renders any valid heading from `h1` to `h6`.
 *
 * @param children - The heading children.
 * @param size - The heading size.
 * @param props - The heading props.
 * @returns A heading element.
 */
const Heading: FC<THeadingProps> = ({ children, size, ...props }) => {
  switch (size) {
    case 'h1':
    case 'H1':
      return <h1 {...props}>{children}</h1>
    case 'h2':
    case 'H2':
      return <h2 {...props}>{children}</h2>
    case 'h3':
    case 'H3':
      return <h3 {...props}>{children}</h3>
    case 'h4':
    case 'H4':
      return <h4 {...props}>{children}</h4>
    case 'h5':
    case 'H5':
      return <h5 {...props}>{children}</h5>
    case 'h6':
    case 'H6':
      return <h6 {...props}>{children}</h6>
    default:
      return null
  }
}

export default Heading
