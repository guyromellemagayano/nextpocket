'use client'

import { FC } from 'react'

import { SessionProvider } from 'next-auth/react'

import { TLayoutProps } from '@types'

/**
 * Provides authentication context to the app.
 * @param children - The child components to render.
 * @returns The authentication provider component.
 */
const AuthProvider: FC<TLayoutProps> = ({ children }): JSX.Element => (
  <SessionProvider>{children}</SessionProvider>
)

export default AuthProvider
