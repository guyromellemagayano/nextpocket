import { FC } from 'react'

import { IHeadingProps } from '@interfaces'

/**
 * Heading component that renders any valid heading from `h1` to `h6`.
 */
const Heading: FC<IHeadingProps> = ({
  children,
  className,
  size,
  ...props
}): JSX.Element => {
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
