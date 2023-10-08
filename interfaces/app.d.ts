import { IUseRequestData } from './hooks'

export interface INotesPageNotesData extends IUseRequestData {
  value?: string
}

export interface IRootLayoutPageLinksData {
  label: string
  href: string
  description?: string
}

export interface IEditableFormProps {
  field: keyof INotesPageNotesData
  params?: any
  data?: INotesPageNotesData
  isEditing: boolean
  width?: number
  height?: number
  [key: string]: any
}

export interface IAvatarSelectedFieldProps {
  id: string
  placeholder: string
  type: string
  required: boolean
  minLength: number
  maxLength: number
}

export interface IAvatarProps {
  src: string
  width: number
  height: number
  field: keyof INotesPageNotesData
  params?: any
  selectedField?: IAvatarSelectedFieldProps
  editableData?: IUseRequestData
  isEditing: boolean
  [key: string]: any
}
