'use client'

import { Article, Section } from '@components/layouts/Content'
import { TBaseCommonAppComponentProps } from 'types/base'

/**
 * Renders the home page.
 *
 * @param translations - The translations to use.
 * @returns The home page component.
 */
const HomeApp = <T,>({
  translations
}: Omit<TBaseCommonAppComponentProps, 'session'> & T): JSX.Element => {
  return (
    <Section className="mx-auto my-6 flex min-h-screen w-full items-center justify-center">
      <Article className="text-center">
        <h1>{translations?.title ?? 'Home Page'}</h1>
        <p>{translations.description ?? 'This is a sample home page'}</p>
      </Article>
    </Section>
  )
}

export default HomeApp
