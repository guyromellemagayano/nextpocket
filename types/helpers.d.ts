import { AXIOS_INSTANCE } from '@config'

export type TRequestCommonProps = {
  url: string
  options?: typeof AXIOS_INSTANCE
}

export type TRequestData = {
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

export type THandleGetProps = TRequestCommonProps

export type THandlePostProps = TRequestCommonProps & {
  data?: TRequestData | object
}

export type THandlePutProps = THandlePostProps

export type THandleDeleteProps = TRequestCommonProps

export type TRequestProps = THandlePostProps & {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
}
