'use client'

import { SessionProvider } from 'next-auth/react'
import { FC } from 'react'

import { TLayoutProps } from '@components'

/**
 * Provides authentication context to the app.
 *
 * @param children - The child components to render.
 * @returns The authentication provider component.
 */
const AuthProvider: FC<TLayoutProps> = ({ children }) => (
  <SessionProvider>{children}</SessionProvider>
)

export default AuthProvider
