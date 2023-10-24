import { Session } from 'next-auth'
import { useSession } from 'next-auth/react'

import { PAGE_LINKS, TPageLinks } from '@config/data'

type TUseRedirect = () => {
  navigation: TPageLinks[]
  session: Session
  status: string
}

/**
 * A custom hook that returns navigation links, session data, and status.
 *
 * @returns An object containing navigation links, session data, and status.
 */
const useRedirect: TUseRedirect = () => {
  const { data: session, status } = useSession()

  const navigation = PAGE_LINKS

  return { navigation, session, status }
}

export default useRedirect
