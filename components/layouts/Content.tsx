'use client'

import { FC } from 'react'

import { TCommonComponentProps } from '@components'

type TContentProps = TCommonComponentProps

/**
 * Renders the main content of the layout.
 *
 * @param children - The content children.
 * @param className - The CSS class name for the content.
 * @param props - The content props.
 * @returns A content element.
 */
export const Main: FC<TContentProps> = ({ children, className, ...props }) => (
  <main className={className} {...props}>
    {children}
  </main>
)

/**
 * Renders a section of the layout.
 *
 * @param children - The section children.
 * @param className - The CSS class name for the section.
 * @param props - The section props.
 * @returns A section element.
 */
export const Section: FC<TContentProps> = ({
  children,
  className,
  ...props
}) => (
  <section className={className} {...props}>
    {children}
  </section>
)

/**
 * Renders an article of the layout.
 *
 * @param children - The article children.
 * @param className - The CSS class name for the article.
 * @param props - The article props.
 * @returns An article element.
 */
export const Article: FC<TContentProps> = ({
  children,
  className,
  ...props
}) => (
  <article className={className} {...props}>
    {children}
  </article>
)
