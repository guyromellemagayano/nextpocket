import { ButtonHTMLAttributes, HTMLAttributes, ReactNode, Ref } from 'react'

import { INotesPageNotesData } from './app'
import { INotesCollectionFormData } from './data'

export interface ICommonProps {
  className?: string
  children?: ReactNode
  [key: string]: any
}

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

export interface IMessageProps
  extends HTMLAttributes<HTMLDivElement>,
    ICommonProps {
  ref?: Ref<HTMLDivElement>
}

export interface IParagraphProps
  extends HTMLAttributes<HTMLParagraphElement, MouseEvent>,
    ICommonProps {
  ref?: Ref<HTMLParagraphElement>
}

export interface IHeadingProps
  extends HTMLAttributes<HTMLHeadingElement, MouseEvent>,
    ICommonProps {
  ref?: Ref<HTMLHeadingElement>
  size?:
    | 'h1'
    | 'H1'
    | 'h2'
    | 'H2'
    | 'h3'
    | 'H3'
    | 'h4'
    | 'H4'
    | 'h5'
    | 'H5'
    | 'h6'
    | 'H6'
}

export interface ILayoutProps extends ICommonProps {}

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ICommonProps {}

export interface IGithubSvgImageProps extends ICommonProps {}
