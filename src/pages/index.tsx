import { NextPage } from 'next'

import { Article, Section } from '@components/layouts/Content'

/**
 * Renders the Home page
 *
 * @returns The Home page component
 */
const Page: NextPage = () => {
  return (
    <Section className="mx-auto my-6 flex min-h-screen w-full items-center justify-center">
      <Article className="text-center">
        <h1>Home Page</h1>
        <p>This is a sample home page</p>
      </Article>
    </Section>
  )
}

export default Page
