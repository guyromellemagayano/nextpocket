'use client'

import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

import { TBaseCommonProps } from 'types/base'

export type TAuthProvider<T = any> = Omit<
  TBaseCommonProps,
  'ref' | 'className'
> &
  T & {
    session?: Session | null
  }

/**
 * Provides authentication context to the app.
 *
 * @param children - The child components to render.
 * @returns The authentication provider component.
 */
const AuthProvider = <T,>({
  children,
  session
}: TAuthProvider<T>): React.ReactNode => (
  <SessionProvider session={session}>{children}</SessionProvider>
)

export default AuthProvider
