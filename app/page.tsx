'use client'

import { FC } from 'react'

import { Article, Section } from '@components'

/**
 * Renders the Home page
 */
const Home: FC = (): JSX.Element => {
  return (
    <Section className="mx-auto my-6 flex min-h-screen w-full items-center justify-center">
      <Article className="text-center">
        <h1>Home Page</h1>
      </Article>
    </Section>
  )
}

export default Home
