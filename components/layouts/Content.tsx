'use client'

import { TBaseCommonProps } from 'types/base'

export type TMainProps<T = any> = TBaseCommonProps & T

/**
 * Renders the main content of the layout.
 *
 * @param children - The content children.
 * @param props - The content props.
 * @returns A content element.
 */
export const Main = <T,>({
  children,
  ...props
}: TMainProps<T>): JSX.Element => <main {...props}>{children}</main>

export type TSectionProps<T = any> = TBaseCommonProps & T

/**
 * Renders a section of the layout.
 *
 * @param children - The section children.
 * @param props - The section props.
 * @returns A section element.
 */
export const Section = <T,>({
  children,
  ...props
}: TSectionProps<T>): JSX.Element => <section {...props}>{children}</section>

export type TArticleProps<T = any> = TBaseCommonProps & T

/**
 * Renders an article of the layout.
 *
 * @param children - The article children.
 * @param props - The article props.
 * @returns An article element.
 */
export const Article = <T,>({
  children,
  ...props
}: TArticleProps<T>): JSX.Element => <article {...props}>{children}</article>
