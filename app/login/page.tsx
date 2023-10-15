'use client'

import { FC } from 'react'

import {
  Button,
  GithubSvgImage,
  Heading,
  Message,
  Paragraph,
} from '@components'
import { useRedirect } from '@hooks'
import clsx from 'clsx'
import { signIn } from 'next-auth/react'

/**
 * Render the Login page
 */
const LoginPage: FC = (): JSX.Element => {
  const { session, status } = useRedirect()

  return (
    <div className="flex h-full min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div
          className={clsx(
            'sm:mx-auto sm:w-full sm:max-w-md',
            status !== 'unauthenticated' && 'flex flex-col items-center',
          )}
        >
          {status === 'loading' ? (
            <Message className="my-3 text-center text-lg font-medium leading-9 tracking-tight text-gray-600">
              Loading...
            </Message>
          ) : (
            <Heading
              className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
              size="h2"
            >
              Sign in to your account
            </Heading>
          )}
        </div>

        {!session && status === 'unauthenticated' && (
          <div className="py-12 sm:mx-auto sm:w-full sm:max-w-sm sm:px-6 lg:px-8">
            <div className="bg-white px-6 py-6 sm:px-12">
              <div className="gap grid grid-cols-1 gap-4">
                <Button
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                  onClick={() => signIn('github', { callbackUrl: '/notes' })}
                >
                  <GithubSvgImage className="h-5 w-5" />
                  <Paragraph className="text-sm font-semibold leading-6">
                    Github
                  </Paragraph>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LoginPage
