'use client'

import { FC } from 'react'

import { TLayoutProps } from '@types'

/**
 * Sidebar component for the layout.
 */
const Sidebar: FC<TLayoutProps> = ({ children, ...props }): JSX.Element => {
  return <aside {...props}>{children}</aside>
}

export default Sidebar
