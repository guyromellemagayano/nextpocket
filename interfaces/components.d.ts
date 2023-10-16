import { ButtonHTMLAttributes, HTMLAttributes, ReactNode, Ref } from 'react'
import { ICommonProps } from './components.d'

import { TNotesPageNotesData } from '../types/app'
import { INotesCollectionFormData } from '../types/data'

export interface ICommonProps {
  children?: ReactNode
  [key: string]: any
}

export interface ICommonComponentProps extends ICommonProps {
  className?: string
}

export interface ICardProps {
  heading?: string
  subheading?: string
  image?: string
  href?: string
}

export interface IListProps
  extends HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  data: TNotesPageNotesData[]
  ordered?: boolean
  [key: string]: any
}

export interface IFormProps {
  data: INotesCollectionFormData[]
  onSubmit: (e: any) => void
}

export interface IMessageProps
  extends HTMLAttributes<HTMLDivElement>,
    ICommonComponentProps {
  ref?: Ref<HTMLDivElement>
}

export interface IParagraphProps
  extends HTMLAttributes<HTMLParagraphElement, MouseEvent>,
    ICommonComponentProps {
  ref?: Ref<HTMLParagraphElement>
}

export interface IHeadingProps
  extends HTMLAttributes<HTMLHeadingElement, MouseEvent>,
    ICommonComponentProps {
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

export interface ILayoutProps extends ICommonComponentProps {}

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ICommonComponentProps {}

export interface IGithubSvgImageProps extends ICommonComponentProps {}
