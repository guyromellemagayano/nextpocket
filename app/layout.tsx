import clsx from 'clsx'
import 'focus-visible'
import { Inter } from 'next/font/google'
import { FC } from 'react'

import { Header, Main, TLayoutProps } from '@components'
import { AuthProvider } from '@providers'

import '@styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const RootLayout: FC<TLayoutProps> = ({ children }) => (
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
