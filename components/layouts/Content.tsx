'use client'

import { ILayoutProps } from '@interfaces'
import { FC } from 'react'

/**
 * Renders the main content of the layout.
 */
export const Main: FC<ILayoutProps> = ({
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
export const Section: FC<ILayoutProps> = ({
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
export const Article: FC<ILayoutProps> = ({
  children,
  className,
  ...props
}): JSX.Element => (
  <article className={className} {...props}>
    {children}
  </article>
)
