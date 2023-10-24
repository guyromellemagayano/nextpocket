'use client'

import { FC, ReactNode } from 'react'

type TContentProps = {
  children?: ReactNode
  [key: string]: any
}

/**
 * Renders the main content of the layout.
 *
 * @param children - The content children.
 * @param props - The content props.
 * @returns A content element.
 */
export const Main: FC<TContentProps> = ({ children, ...props }) => (
  <main {...props}>{children}</main>
)

/**
 * Renders a section of the layout.
 *
 * @param children - The section children.
 * @param props - The section props.
 * @returns A section element.
 */
export const Section: FC<TContentProps> = ({ children, ...props }) => (
  <section {...props}>{children}</section>
)

/**
 * Renders an article of the layout.
 *
 * @param children - The article children.
 * @param props - The article props.
 * @returns An article element.
 */
export const Article: FC<TContentProps> = ({ children, ...props }) => (
  <article {...props}>{children}</article>
)
