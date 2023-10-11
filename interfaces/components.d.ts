import { ButtonHTMLAttributes, HTMLAttributes, ReactNode, Ref } from 'react'

import { INotesPageNotesData } from './app'
import { INotesCollectionFormData } from './data'

export interface ICardProps {
  heading?: string
  subheading?: string
  image?: string
  href?: string
}

export interface IListProps
  extends HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  data: INotesPageNotesData[]
  ordered?: boolean
  [key: string]: any
}

export interface IFormProps {
  data: INotesCollectionFormData[]
  onSubmit: (e: any) => void
}

export interface IMessageProps extends HTMLAttributes<HTMLDivElement> {
  message?: string
}

export interface IParagraphProps
  extends HTMLAttributes<HTMLParagraphElement, MouseEvent> {
  className?: string
  children: ReactNode
  [key: string]: any
}

export interface ILayoutProps {
  className?: string
  children: ReactNode
  [key: string]: any
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: Ref<HTMLButtonElement>
  className?: string
}
