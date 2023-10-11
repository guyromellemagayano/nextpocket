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
  message?: string
}

export interface ILayoutProps {
  children: ReactNode
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: Ref<HTMLButtonElement>
  className?: string
}
