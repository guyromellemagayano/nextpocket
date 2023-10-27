'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'

import AuthCheck from '@components/auth/AuthCheck'
import Image from '@components/images/Image'
import Paragraph from '@components/typography/Paragraph'
import { TBaseCommonAppComponentProps } from 'types/base'

/**
 * Renders the Profiles page
 *
 * @returns The Profiles page component
 */
const ProfileApp = <T,>({
  session,
  translations
}: TBaseCommonAppComponentProps<T>): JSX.Element => {
  const router = useRouter()

  if (!session) {
    router.push('/login?callbackUrl=/profile')
  }

  return (
    <AuthCheck>
      <div className="flex h-full min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div
            className={clsx(
              'sm:mx-auto sm:w-full sm:max-w-md',
              session && 'flex flex-col items-center'
            )}
          >
            <Image
              src={session?.user?.image ?? '/mememan.webp'}
              width={40}
              height={40}
              alt={session?.user?.name ?? translations?.unknownUser ?? ''}
              className="my-3 h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
            />
            <Paragraph className="my-3 text-center text-lg font-medium leading-9 tracking-tight text-gray-600">
              {translations?.loggedIn ?? ''}
              {': '}
              {session?.user?.name ?? translations?.unknownUser ?? ''}
            </Paragraph>
            <Paragraph className="text-md mb-3 text-center font-medium leading-9 tracking-tight text-gray-500">
              {session?.user?.email ?? translations?.unknownUser ?? ''}
            </Paragraph>
          </div>
        </div>
      </div>
    </AuthCheck>
  )
}

export default ProfileApp
