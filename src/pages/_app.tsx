import '@styles/globals.css'
import clsx from 'clsx'
import 'focus-visible'
import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { ReactNode, Suspense } from 'react'

import { Main } from '@components/layouts/Content'
import Header from '@components/layouts/Header'
import Message from '@components/messages/Message'
import AuthProvider from '@contexts/AuthProvider'

type TLayoutProps = {
  children?: ReactNode
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

/**
 * Renders the root layout
 *
 * @param children - The child components to render.
 * @returns The root layout component.
 */
const RootLayout = ({ children }: TLayoutProps) => {
  return (
    <Suspense
      fallback={
        <Message className="flex h-full min-h-screen items-center justify-center">
          Loading...
        </Message>
      }
    >
      <AuthProvider>
        <div className={clsx(inter.className)}>
          <Header />
          <Main>{children}</Main>
        </div>
      </AuthProvider>
    </Suspense>
  )
}

function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default App
