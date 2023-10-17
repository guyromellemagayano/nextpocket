'use client'

import { FC } from 'react'

import { TLayoutProps } from '@types'

/**
 * Renders the main content of the layout.
 */
export const Main: FC<TLayoutProps> = ({
  children,
  className,
  ...props
}): JSX.Element => (
  <main className={className} {...props}>
    {children}
  </main>
)

/**
 * Renders a section of the layout.
 */
export const Section: FC<TLayoutProps> = ({
  children,
  className,
  ...props
}): JSX.Element => (
  <section className={className} {...props}>
    {children}
  </section>
)

/**
 * Renders an article of the layout.
 */
export const Article: FC<TLayoutProps> = ({
  children,
  className,
  ...props
}): JSX.Element => (
  <article className={className} {...props}>
    {children}
  </article>
)
