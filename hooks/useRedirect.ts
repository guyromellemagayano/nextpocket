import { useSession } from 'next-auth/react'

import { PAGE_LINKS } from '@config'
import { TUseRedirect } from '@types'

const useRedirect = (): TUseRedirect => {
  const { data: session, status } = useSession()

  const navigation = PAGE_LINKS

  return { navigation, session, status }
}

export default useRedirect
