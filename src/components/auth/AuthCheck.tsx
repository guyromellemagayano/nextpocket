import { useSession } from 'next-auth/react'
import { FC, ReactNode } from 'react'

type TAuthCheckProps = {
  children?: ReactNode
  [key: string]: any
}

/**
 * A component that checks if the user is authenticated and renders its children if true.
 *
 * @param children - The children of the component.
 * @returns The auth check component.
 */
const AuthCheck: FC<TAuthCheckProps> = ({ children }) => {
  const { data: session, status } = useSession()

  if (session && status === 'authenticated') {
    return <>{children}</>
  } else {
    return <></>
  }
}

export default AuthCheck
