import clsx from 'clsx'
import 'focus-visible'
import { dir } from 'i18next'
import { Inter } from 'next/font/google'
import { FC, ReactNode } from 'react'

import { languages } from '@app/i18n/settings'
import { Main } from '@components/layouts/Content'
import Header from '@components/layouts/Header'
import AuthProvider from '@contexts/AuthProvider'

import '@styles/globals.css'

type TLayoutProps = {
  children?: ReactNode
  params: {
    lng: string
  }
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const generateStaticParams = () => languages.map(lng => ({ lng }))

/**
 * Renders the root layout
 *
 * @param children - The child components to render.
 * @param params - The params object.
 * @returns The root layout component.
 */
const RootLayout: FC<TLayoutProps> = ({ children, params: { lng } }) => (
  <AuthProvider dir={dir(lng)}>
    <div className={clsx(inter.className)}>
      <Header />
      <Main>{children}</Main>
    </div>
  </AuthProvider>
)

export default RootLayout
