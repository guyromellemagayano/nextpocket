import { FC } from 'react'

import clsx from 'clsx'
import 'focus-visible'
import { Inter } from 'next/font/google'

import { Header, Main } from '@components'
import { AuthProvider } from '@providers'
import { TLayoutProps } from '@types'

import '@styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const RootLayout: FC<TLayoutProps> = ({ children }): JSX.Element => (
  <AuthProvider>
    <html lang="en">
      <body className={clsx(inter.className)}>
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  </AuthProvider>
)

export default RootLayout
