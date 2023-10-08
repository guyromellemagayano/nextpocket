import { AXIOS_INSTANCE } from '@config'

export interface IUseRequestData {
  avatar?: string
  collectionId?: string
  collectionName?: string
  company?: string
  created?: string
  department?: string
  id?: string
  name?: string
  title?: string
  updated?: string
}

export interface IHandleGetProps {
  url: string
  options?: typeof AXIOS_INSTANCE
}

export interface IHandlePostProps {
  url: string
  data: IUseRequestData | {}
  options?: typeof AXIOS_INSTANCE
}

export interface IHandlePutProps {
  url: string
  data: IUseRequestData | {}
  options?: typeof AXIOS_INSTANCE
}

export interface IHandleDeleteProps {
  url: string
  options?: typeof AXIOS_INSTANCE
}

export interface IUseRequestProps {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  url: string
  data?: IUseRequestData | {}
  options?: typeof AXIOS_INSTANCE
}
