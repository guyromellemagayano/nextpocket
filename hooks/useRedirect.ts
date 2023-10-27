import { Session } from 'next-auth'
import { useSession } from 'next-auth/react'

import { pageLinks, TPageLinks } from 'configs/data'

export type TUseRedirect = {
  navigation: TPageLinks[]
  session: Session | null
  status: 'authenticated' | 'loading' | 'unauthenticated'
}

/**
 * A custom hook that returns navigation links, session data, and status.
 *
 * @returns An object containing navigation links, session data, and status.
 */
const useRedirect = (): TUseRedirect => {
  const { data: session, status } = useSession()

  const navigation = pageLinks

  return { navigation, session, status }
}

export default useRedirect
