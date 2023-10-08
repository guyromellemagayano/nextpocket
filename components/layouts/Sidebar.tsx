import { FC } from 'react'

import { ILayoutProps } from '@interfaces'

/**
 * Render a generic sidebar component.
 * @param children - The content to be displayed inside the sidebar.
 * @param props - Additional props to be spread on the aside element.
 * @returns A JSX.Element representing the sidebar.
 */
const Sidebar: FC<ILayoutProps> = ({ children, ...props }): JSX.Element => {
  return <aside {...props}>{children}</aside>
}

export default Sidebar
