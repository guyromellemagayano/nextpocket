import { INotesCollectionFormData } from './data'
import { IRequestData } from './helpers'

export interface INotesPageNotesData extends IRequestData {
  value?: string
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

export interface IAvatarProps {
  src: string
  width: number
  height: number
  field: keyof INotesPageNotesData
  selectedField?: INotesCollectionFormData
  editableData?: IRequestData
  isEditing: boolean
  [key: string]: any
}
