'use client'

import clsx from 'clsx'
import { redirect } from 'next/navigation'
import { signIn } from 'next-auth/react'

import Button from '@components/buttons/Button'
import GithubSvgImage from '@components/images/svg/Github'
import Heading from '@components/typography/Heading'
import Paragraph from '@components/typography/Paragraph'
import { TBaseCommonAppComponentProps } from 'types/base'

/**
 * Renders the Login page
 *
 * @param session - The session object.
 * @returns The Login page component
 */
const LoginApp = <T,>({
  session,
  translations
}: TBaseCommonAppComponentProps<T>): JSX.Element => {
  if (session) {
    redirect('/notes?callbackUrl=/login')
  }

  return (
    <div className="flex h-full min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div
          className={clsx(
            'sm:mx-auto sm:w-full sm:max-w-md',
            !session && 'flex flex-col items-center'
          )}
        >
          <Heading
            className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
            size="h2"
          >
            {translations?.['heading'] ?? 'Sign in to your account'}
          </Heading>
        </div>

        <div className="py-12 sm:mx-auto sm:w-full sm:max-w-sm sm:px-6 lg:px-8">
          <div className="bg-white px-6 py-6 sm:px-12">
            <div className="gap grid grid-cols-1 gap-4">
              <Button
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                onClick={() => signIn('github', { callbackUrl: '/notes' })}
              >
                <GithubSvgImage className="h-5 w-5" />
                <Paragraph className="text-sm font-semibold leading-6">
                  {translations?.['github'] ?? 'Github'}
                </Paragraph>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginApp
