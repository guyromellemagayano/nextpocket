import { FC } from 'react'

import { useSession } from 'next-auth/react'

import { ICommonProps } from '@interfaces'

const AuthCheck: FC<ICommonProps> = ({ children }): JSX.Element => {
  const { data: session, status } = useSession()

  // console.log(session, status)

  if (status === 'authenticated') {
    return <>{children}</>
  } else {
    return <></>
  }
}

export default AuthCheck
