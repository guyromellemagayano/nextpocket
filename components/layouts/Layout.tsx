'use client'

import { Main } from './Content'
import Header from './Header'

import { TBaseCommonProps } from 'types/base'

export type TLayoutProps<T = any> = TBaseCommonProps & T

/**
 * Renders the layout
 *
 * @param children - The child components to render.
 * @returns The layout component.
 */
const Layout = <T,>({ children, ...props }: TLayoutProps<T>): JSX.Element => {
  return (
    <div {...props}>
      <Header />
      <Main>{children}</Main>
    </div>
  )
}

export default Layout
