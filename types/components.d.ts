import { TNotesCollectionFormData } from './data'
import { TNotesPageNotesData } from './notes'

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

export type TLayoutProps = TCommonProps

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  TCommonProps

export type TSvgImageProps = TCommonProps
