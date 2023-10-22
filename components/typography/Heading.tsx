import { FC, HTMLAttributes, Ref } from 'react'

import { TCommonComponentProps } from '@components'

type THeadingProps = HTMLAttributes<HTMLHeadingElement> &
  HTMLAttributes<MouseEvent> &
  TCommonComponentProps & {
    ref?: Ref<HTMLHeadingElement>
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
 * @param className - The CSS class name for the heading.
 * @param size - The heading size.
 * @param props - The heading props.
 * @returns A heading element.
 */
const Heading: FC<THeadingProps> = ({
  children,
  className,
  size,
  ...props
}) => {
  switch (size) {
    case 'h1':
    case 'H1':
      return (
        <h1 className={className} {...props}>
          {children}
        </h1>
      )
    case 'h2':
    case 'H2':
      return (
        <h2 className={className} {...props}>
          {children}
        </h2>
      )
    case 'h3':
    case 'H3':
      return (
        <h3 className={className} {...props}>
          {children}
        </h3>
      )
    case 'h4':
    case 'H4':
      return (
        <h4 className={className} {...props}>
          {children}
        </h4>
      )
    case 'h5':
    case 'H5':
      return (
        <h5 className={className} {...props}>
          {children}
        </h5>
      )
    case 'h6':
    case 'H6':
      return (
        <h6 className={className} {...props}>
          {children}
        </h6>
      )
    default:
      return null
  }
}

export default Heading
