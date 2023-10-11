import { SessionProvider } from 'next-auth/react'

import { ILayoutProps } from '@interfaces'

const AuthProvider = ({ children }: ILayoutProps): JSX.Element => (
  <SessionProvider>{children}</SessionProvider>
)

export default AuthProvider
