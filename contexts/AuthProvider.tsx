'use client'

import { SessionProvider } from 'next-auth/react'
import { FC, ReactNode } from 'react'

type TAuthProvider = {
  children?: ReactNode
}

/**
 * Provides authentication context to the app.
 *
 * @param children - The child components to render.
 * @returns The authentication provider component.
 */
const AuthProvider: FC<TAuthProvider> = ({ children }) => (
  <SessionProvider>{children}</SessionProvider>
)

export default AuthProvider
