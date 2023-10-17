'use client'

import { FC } from 'react'

import { TButtonProps } from '@types'

/**
 * A reusable button component.
 */
const Button: FC<TButtonProps> = ({ className, ...props }): JSX.Element => {
  return <button className={className} {...props} />
}

export default Button
