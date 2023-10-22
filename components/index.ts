import { ReactNode } from 'react'

export type TCommonComponentProps = {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export type TLayoutProps = TCommonComponentProps

export { AuthCheck } from './auth'
export { Avatar } from './avatar'
export { Button } from './buttons'
export { Card } from './cards'
export { EditableForm, Form } from './forms'
export { GithubSvgImage, Image } from './images'
export { Article, Header, Main, Section, Sidebar } from './layouts'
export { List } from './lists'
export { Message } from './messages'
export { Heading, Paragraph } from './typography'
