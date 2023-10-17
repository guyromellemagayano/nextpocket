import { FC } from 'react'

import { TMessageProps } from '@types'

/**
 * A message component that displays a loading message.
 */
const Message: FC<TMessageProps> = ({
  className,
  children,
  ...props
}): JSX.Element => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export default Message
