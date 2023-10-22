'use client'

import { ButtonHTMLAttributes, FC } from 'react'

import { TCommonComponentProps } from '@components'

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  TCommonComponentProps

/**
 * A reusable button component.
 *
 * @param className - The CSS class name for the button.
 * @param props - The button props.
 * @returns A button element.
 */
const Button: FC<TButtonProps> = ({ className, ...props }) => {
  return <button className={className} {...props} />
}

export default Button
