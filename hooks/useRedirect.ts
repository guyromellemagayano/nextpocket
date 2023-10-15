import { useSession } from 'next-auth/react'

import { PAGE_LINKS } from '@config'
import { IPageLinks } from '@interfaces'
import { Session } from 'next-auth'

const useRedirect = (): {
  navigation: IPageLinks[]
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
