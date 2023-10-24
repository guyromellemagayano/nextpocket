'use client'

import clsx from 'clsx'
import { redirect } from 'next/navigation'
import { FC } from 'react'

import AuthCheck from '@components/auth/AuthCheck'
import Image from '@components/images/Image'
import Message from '@components/messages/Message'
import Paragraph from '@components/typography/Paragraph'
import useRedirect from '@hooks/useRedirect'

/**
 * Renders the Profile page
 *
 * @returns The Profile page component
 */
const ProfilePage: FC = () => {
  const { session, status } = useRedirect()

  if (status === 'loading')
    return (
      <Message className="flex h-full min-h-screen items-center justify-center">
        Loading...
      </Message>
    )

  if (!session && status === 'unauthenticated') {
    redirect('/login?callbackUrl=/profile')
  }

  return (
    <AuthCheck>
      <div className="flex h-full min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div
            className={clsx(
              'sm:mx-auto sm:w-full sm:max-w-md',
              status !== 'unauthenticated' && 'flex flex-col items-center'
            )}
          >
            <Image
              src={session.user?.image ?? '/mememan.webp'}
              width={40}
              height={40}
              alt={session.user?.name ?? 'Unknown User'}
              className="my-3 h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
            />
            <Paragraph className="my-3 text-center text-lg font-medium leading-9 tracking-tight text-gray-600">
              Logged in as {session.user?.name ?? 'Unknown User'}
            </Paragraph>
            <Paragraph className="text-md mb-3 text-center font-medium leading-9 tracking-tight text-gray-500">
              {session.user?.email ?? 'Unknown Email'}
            </Paragraph>
          </div>
        </div>
      </div>
    </AuthCheck>
  )
}

export default ProfilePage
