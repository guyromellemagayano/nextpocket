'use client'

import { SessionProvider } from 'next-auth/react'

import { ILayoutProps } from '@interfaces'

/**
 * Provides authentication context to the app.
 */
const AuthProvider = ({ children }: ILayoutProps): JSX.Element => (
  <SessionProvider>{children}</SessionProvider>
)

export default AuthProvider
