import clsx from 'clsx'
import 'focus-visible'
import { dir } from 'i18next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'

import Layout from '@components/layouts/Layout'
import Message from '@components/messages/Message'
import AuthProvider from '@contexts/AuthProvider'
import { TBaseCommonProps } from 'types/base'

import '@styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export type TRootLayoutProps<T = any> = TBaseCommonProps &
  T & {
    session?: any
    params: { locale: string }
  }

/**
 * Renders the root layout
 *
 * @param children - The child components to render.
 * @param session - The user session.
 * @param locale - The current locale.
 * @returns The root layout component.
 */
const RootLayout = <T,>({
  children,
  session,
  params: { locale }
}: TRootLayoutProps<T>) => {
  return (
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
      <body className={clsx(inter.className)}>
        <Suspense
          fallback={
            <Message className="flex h-full min-h-screen items-center justify-center">
              Loading...
            </Message>
          }
        >
          <AuthProvider session={session}>
            <Layout>{children}</Layout>
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  )
}

export default RootLayout
