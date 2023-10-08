export interface ISwr<T> {
  data: T | null
  error: Error | null
  isLoading: boolean
  isValidating: boolean
}

export interface IErrorResponse {
  message?: string
}
