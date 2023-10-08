import { FC } from 'react'

import { IMessageProps } from '@interfaces'

/**
 * A message component that displays a loading message.
 * @param message The message to display while loading.
 * @returns A JSX element representing the loader component.
 */
const Message: FC<IMessageProps> = ({
  message = 'Loading...',
  ...props
}): JSX.Element => {
  return <div {...props}>{message}</div>
}

export default Message
