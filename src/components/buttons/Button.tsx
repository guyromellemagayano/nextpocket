import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode
  [key: string]: any
}

/**
 * A reusable button component.
 *
 * @param children - The children of the component
 * @param props - The props of the component
 * @returns The button component
 */
const Button: FC<TButtonProps> = ({ children, ...props }) => {
  return (
    <button className={props?.className} {...props}>
      {children}
    </button>
  )
}

export default Button
