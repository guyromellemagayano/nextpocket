import { FC } from 'react'

import { useSession } from 'next-auth/react'

import { TCommonProps } from '@types'

const AuthCheck: FC<TCommonProps> = ({ children }): JSX.Element => {
  const { data: session, status } = useSession()

  if (session && status === 'authenticated') {
    return <>{children}</>
  } else {
    return <></>
  }
}

export default AuthCheck
