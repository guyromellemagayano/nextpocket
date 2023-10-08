'use client'

import { FC } from 'react'

import { Article, Section } from '@components'

/**
 * Renders the Home page
 */
const Home: FC = (): JSX.Element => {
  return (
    <Section className="flex justify-center w-full my-6 min-h-screen mx-auto items-center">
      <Article className="text-center">
        <h1>Home Page</h1>
      </Article>
    </Section>
  )
}

export default Home
