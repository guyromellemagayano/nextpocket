'use client'

import clsx from 'clsx'
import 'focus-visible'
import { Inter } from 'next/font/google'

import { Header, Main } from '@components'
import { ILayoutProps } from '@interfaces'
import { AuthProvider } from '@providers'

import '@styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const RootLayout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={clsx(inter.className, 'md:px-3 md:py-6')}>
          <Header />
          <Main>{children}</Main>
        </body>
      </html>
    </AuthProvider>
  )
}

export default RootLayout
