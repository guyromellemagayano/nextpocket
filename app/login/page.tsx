'use client'

import { GithubSvgImage, Heading, Paragraph } from '@components'
import { FC } from 'react'

/**
 * Render the Login page
 */
const LoginPage: FC = (): JSX.Element => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Heading
          className="mt-12 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
          size="h2"
        >
          Sign in to your account
        </Heading>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="bg-white px-6 py-12 sm:px-12">
          <div className="grid grid-cols-1 gap-4 gap">
            <a
              href="#"
              className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
            >
              <GithubSvgImage className="h-5 w-5" />
              <Paragraph className="text-sm font-semibold leading-6">
                Github
              </Paragraph>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
