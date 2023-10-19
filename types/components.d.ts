import { Session } from 'next-auth'

import { TNotesPageNotesData } from './app'
import { TNotesCollectionFormData } from './data'
import { TRequestData } from './helpers'

export type TCommonProps = {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export type TCardProps = {
  heading?: string
  subheading?: string
  image?: string
  href?: string
}

export type TListProps = HTMLAttributes<HTMLUListElement | HTMLOListElement> & {
  data: TNotesPageNotesData[]
  ordered?: boolean
  [key: string]: any
}

export type TFormProps = {
  data: TNotesCollectionFormData[]
  onSubmit: (e: any) => void
}

export type TMessageProps = HTMLAttributes<HTMLDivElement> &
  TCommonProps & {
    ref?: Ref<HTMLDivElement>
  }

export type TParagraphProps = HTMLAttributes<HTMLParagraphElement, MouseEvent> &
  TCommonProps & {
    ref?: Ref<HTMLParagraphElement>
  }

export type THeadingProps = HTMLAttributes<HTMLHeadingElement, MouseEvent> &
  TCommonProps & {
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

export type TLayoutProps = TCommonProps & {
  session?: Session
}

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  TCommonProps

export type TSvgImageProps = TCommonProps

export type TAvatarProps = {
  src: string
  width: number
  height: number
  field: keyof TNotesPageNotesData
  selectedField?: TNotesCollectionFormData
  editableData?: TRequestData
  isEditing: boolean
  setIsEditing: (value: boolean) => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
  onEditStatus: () => void
  [key: string]: any
}

export type TEditableFormProps = {
  field: keyof TNotesPageNotesData
  params?: any
  data?: TNotesPageNotesData
  width?: number
  height?: number
  [key: string]: any
}
