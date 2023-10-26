import { SessionProvider } from 'next-auth/react'
import { FC, ReactNode } from 'react'

type TAuthProvider = {
  children?: ReactNode
  [key: string]: any
}

/**
 * Provides authentication context to the app.
 *
 * @param children - The child components to render.
 * @returns The authentication provider component.
 */
const AuthProvider: FC<TAuthProvider> = ({ children, session }) => (
  <SessionProvider session={session}>{children}</SessionProvider>
)

export default AuthProvider
