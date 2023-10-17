import { Session } from 'next-auth'
import { useSession } from 'next-auth/react'

import { PAGE_LINKS } from '@config'
import { TPageLinks } from '@types'

const useRedirect = (): {
  navigation: TPageLinks[]
  session: Session
  status: string
} => {
  const { data: session, status } = useSession()

  const navigation =
    !session && status !== 'authenticated'
      ? PAGE_LINKS.filter(item => item.slug !== 'notes')
      : PAGE_LINKS

  return { navigation, session, status }
}

export default useRedirect
