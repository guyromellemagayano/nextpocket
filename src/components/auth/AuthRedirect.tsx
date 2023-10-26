import { Session } from 'next-auth'
import { useSession } from 'next-auth/react'

import { PAGE_LINKS, TPageLinks } from 'configs/data'

type TAuthRedirect = () => {
  navigation: TPageLinks[]
  session: Session | null
  status: 'authenticated' | 'loading' | 'unauthenticated'
}

/**
 * Redirects the user to the appropriate page based on their authentication status.
 *
 * @returns The session and status of the user
 */
const AuthRedirect: TAuthRedirect = () => {
  const { data: session, status } = useSession()

  const navigation = PAGE_LINKS

  return { navigation, session, status }
}

export default AuthRedirect
