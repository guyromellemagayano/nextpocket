'use client'

import { FC, ReactNode } from 'react'

type TSidebarProps = {
  children?: ReactNode
  [key: string]: any
}

/**
 * Sidebar component for the layout.
 *
 * @param children - The sidebar children.
 * @param props - The sidebar props.
 * @returns A sidebar element.
 */
const Sidebar: FC<TSidebarProps> = ({ children, ...props }) => {
  return <aside {...props}>{children}</aside>
}

export default Sidebar
