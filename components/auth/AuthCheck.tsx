import { useSession } from 'next-auth/react'
import { FC } from 'react'

import { TCommonComponentProps } from '@components'

const AuthCheck: FC<TCommonComponentProps> = ({ children }) => {
  const { data: session, status } = useSession()

  if (session && status === 'authenticated') {
    return <>{children}</>
  } else {
    return <></>
  }
}

export default AuthCheck
