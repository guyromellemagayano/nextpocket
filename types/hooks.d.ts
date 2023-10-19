import { Session } from 'next-auth'

import { TPageLinks } from '@types'

export type TUseRedirect = {
  navigation: TPageLinks[]
  session: Session
  status: string
}
