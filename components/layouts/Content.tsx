/**
 * This module exports three React functional components that can be used to render the main content of a layout.
 * @module Content
 */

import { ILayoutProps } from '@interfaces'
import { FC } from 'react'

/**
 * Renders the main content of the layout.
 * @param {ILayoutProps} props - The props to pass down to the main element.
 * @param {React.ReactNode} props.children - The child components to render.
 * @returns {JSX.Element} The main element with the specified props and children.
 */
export const Main: FC<ILayoutProps> = ({ children, ...props }): JSX.Element => (
  <main {...props}>{children}</main>
)

/**
 * Renders a section of the layout.
 * @param {ILayoutProps} props - The props to pass down to the section element.
 * @param {React.ReactNode} props.children - The child components to render.
 * @returns {JSX.Element} The section element with the specified props and children.
 */
export const Section: FC<ILayoutProps> = ({
  children,
  ...props
}): JSX.Element => <section {...props}>{children}</section>

/**
 * Renders an article of the layout.
 * @param {ILayoutProps} props - The props to pass down to the article element.
 * @param {React.ReactNode} props.children - The child components to render.
 * @returns {JSX.Element} The article element with the specified props and children.
 */
export const Article: FC<ILayoutProps> = ({
  children,
  ...props
}): JSX.Element => <article {...props}>{children}</article>
