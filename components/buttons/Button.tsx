import { FC } from 'react'

import { IButtonProps } from '@interfaces'

/**
 * A reusable button component.
 */
const Button: FC<IButtonProps> = ({ className, ...props }): JSX.Element => {
  return <button className={className} {...props} />
}

export default Button
