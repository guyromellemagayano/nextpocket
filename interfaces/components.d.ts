import { HTMLAttributes, ReactNode } from 'react'
import { INotesPageNotesData } from './app'

export interface ICardProps {
  heading: string
  subheading: string
  image: string
  href: string
}

export interface IListProps
  extends HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  data: INotesPageNotesData[]
  ordered?: boolean
  [key: string]: any
}

export interface IImageProps {
  src: string
  alt?: string
  width: number
  height: number
  [key: string]: any
}

export interface IFormProps {
  data: IFormDataProps[]
  onSubmit: (e: any) => void
  [key: string]: any
}

export interface IFormDataProps {
  id?: string
  placeholder?: string
  type: string
  required: boolean
  minLength: number
  maxLength: number
  [key: string]: any
}

export interface IMessageProps {
  message?: string
  [key: string]: any
}

export interface IParagraphProps
  extends MouseEvent<HTMLParagraphElement, MouseEvent> {
  message?: string
  [key: string]: any
}

export interface ILayoutProps {
  children: ReactNode
  [key: string]: any
}
