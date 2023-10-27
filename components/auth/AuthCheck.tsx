import { useSession } from 'next-auth/react'

import { TBaseCommonProps } from 'types/base'

export type TAuthCheckProps<T = any> = TBaseCommonProps & T

/**
 * A component that checks if the user is authenticated and renders its children if true.
 *
 * @param children - The children of the component.
 * @returns The auth check component.
 */
const AuthCheck = <T,>({ children }: TAuthCheckProps<T>): JSX.Element => {
  const { data: session, status } = useSession()

  if (session && status === 'authenticated') {
    return <>{children}</>
  } else {
    return <></>
  }
}

export default AuthCheck
