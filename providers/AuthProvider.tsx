'use client'

import { FC } from 'react'

import { SessionProvider } from 'next-auth/react'

import { TLayoutProps } from '@types'

/**
 * Provides authentication context to the app.
 */
const AuthProvider: FC<TLayoutProps> = ({ children }): JSX.Element => (
  <SessionProvider>{children}</SessionProvider>
)

export default AuthProvider
