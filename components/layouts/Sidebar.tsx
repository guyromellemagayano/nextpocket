'use client'

import { FC } from 'react'

import { TLayoutProps } from '@components'

/**
 * Sidebar component for the layout.
 *
 * @param children - The sidebar children.
 * @param className - The CSS class name for the sidebar.
 * @param props - The sidebar props.
 * @returns A sidebar element.
 */
const Sidebar: FC<TLayoutProps> = ({ children, ...props }) => {
  return <aside {...props}>{children}</aside>
}

export default Sidebar
