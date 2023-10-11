import { FC } from 'react'

import { ILayoutProps } from '@interfaces'

/**
 * Sidebar component for the layout.
 */
const Sidebar: FC<ILayoutProps> = ({ children, ...props }): JSX.Element => {
  return <aside {...props}>{children}</aside>
}

export default Sidebar
