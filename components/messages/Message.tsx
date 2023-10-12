import { FC } from 'react'

import { IMessageProps } from '@interfaces'

/**
 * A message component that displays a loading message.
 */
const Message: FC<IMessageProps> = ({
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
