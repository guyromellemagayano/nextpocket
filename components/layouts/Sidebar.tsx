import { TBaseCommonProps } from 'types/base'

export type TSidebarProps<T = any> = T & TBaseCommonProps

/**
 * Sidebar component for the layout.
 *
 * @param children - The sidebar children.
 * @param props - The sidebar props.
 * @returns A sidebar element.
 */
const Sidebar = <T,>({ children, ...props }: TSidebarProps<T>): JSX.Element => {
  return <aside {...props}>{children}</aside>
}

export default Sidebar
