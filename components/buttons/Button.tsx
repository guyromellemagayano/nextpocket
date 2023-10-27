import { ButtonHTMLAttributes } from 'react'

import { TBaseCommonProps } from 'types/base'

export type TBaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  TBaseCommonProps

export type TButtonProps<T = any> = TBaseButtonProps & T

/**
 * A reusable button component.
 *
 * @param children - The children of the component
 * @param props - The props of the component
 * @returns The button component
 */
const Button = <T,>({ children, ...props }: TButtonProps<T>): JSX.Element => {
  return (
    <button className={props?.className} {...props}>
      {children}
    </button>
  )
}

export default Button
