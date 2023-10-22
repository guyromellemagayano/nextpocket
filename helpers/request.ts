import { AXIOS_INSTANCE, axiosInstance, handleError } from '@lib'

type TRequesTCommonComponentProps = {
  url: string
  options?: typeof AXIOS_INSTANCE
}

export type TRequestData = {
  key?: string
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

type THandleGetProps = TRequesTCommonComponentProps

type THandlePostProps = TRequesTCommonComponentProps & {
  data?: TRequestData | object
}

type THandlePutProps = THandlePostProps

type THandleDeleteProps = TRequesTCommonComponentProps

type TRequestProps = THandlePostProps & {
  method:
    | 'GET'
    | 'get'
    | 'POST'
    | 'post'
    | 'PUT'
    | 'put'
    | 'PATCH'
    | 'patch'
    | 'DELETE'
    | 'delete'
}

/**
 * Makes a GET request to the specified URL and returns the response data.
 * Throws an error if the request fails or the server responds with an error status code.
 *
 * @param url - The URL to make the GET request to.
 * @param options - Optional axios configuration options.
 * @returns A Promise that resolves to the response data.
 */
const handleGet = async <T = any>({
  url,
  options
}: THandleGetProps): Promise<void | Awaited<T>> =>
  await axiosInstance
    .get<T>(url, options)
    .then(res => res.data)
    .catch(err => handleError(err))

/**
 * Sends a POST request to the specified URL with the provided data and options.
 *
 * @param url - The URL to send the request to.
 * @param data - The data to send with the request.
 * @param options - The options to use for the request.
 * @returns A Promise that resolves with the response data.
 * @throws An error if the server responds with a status other than 2xx, if no response is received from the server, or if there is an error setting up the request.
 */
const handlePost = async <T = any>({
  url,
  data,
  options
}: THandlePostProps): Promise<void | Awaited<T>> =>
  await axiosInstance
    .post<T>(url, data, options)
    .then(res => res.data)
    .catch(err => handleError(err))

/**
 * Sends a PUT request to the specified URL with the provided data and options.
 *
 * @param url - The URL to send the PUT request to.
 * @param data - The data to include in the request body.
 * @param options - The options to use for the request.
 * @returns A Promise that resolves with the response data.
 * @throws An error if the server responds with a status other than 2xx, if no response is received from the server, or if there is an error setting up the request.
 */
const handlePut = async <T = any>({
  url,
  data,
  options
}: THandlePutProps): Promise<void | Awaited<T>> =>
  await axiosInstance
    .put<T>(url, data, options)
    .then(res => res.data)
    .catch(err => handleError(err))

/**
 * Sends a PATCH request to the specified URL with the provided data and options.
 *
 * @param url - The URL to send the PATCH request to.
 * @param data - The data to send with the PATCH request.
 * @param options - The options to use for the PATCH request.
 * @returns A Promise that resolves with the response data, or rejects with an error.
 */
const handlePatch = async <T = any>({
  url,
  data,
  options
}: THandlePutProps): Promise<void | Awaited<T>> =>
  await axiosInstance
    .patch<T>(url, data, options)
    .then(res => res.data)
    .catch(err => handleError(err))

/**
 * Sends a DELETE request to the specified URL using axios and returns the response data.
 * If an error occurs, it throws an error with a message describing the error.
 *
 * @param url - The URL to send the DELETE request to.
 * @param options - Optional axios request configuration options.
 * @returns A Promise that resolves to the response data.
 * @template T - The type of the response data.
 */
const handleDelete = async <T = any>({
  url,
  options
}: THandleDeleteProps): Promise<void | Awaited<T>> =>
  await axiosInstance
    .delete<T>(url, options)
    .then(res => res.data)
    .catch(err => handleError(err))

/**
 * Makes an HTTP request using the specified method, URL, data, and options.
 *
 * @param method The HTTP method to use (GET, POST, PUT, PATCH, DELETE).
 * @param url The URL to send the request to.
 * @param data The data to send with the request (optional).
 * @param options Additional options to include with the request (optional).
 * @returns A promise that resolves with the response data, or void if there is no response data.
 * @throws An error if an invalid request method is provided.
 */
const request = async <T = unknown>({
  method,
  url,
  data,
  options
}: TRequestProps): Promise<void | Awaited<T>> => {
  switch (method) {
    case 'GET':
    case 'get':
      return await handleGet<T>({ url, options })
    case 'POST':
    case 'post':
      return await handlePost<T>({ url, data, options })
    case 'PUT':
    case 'put':
      return await handlePut<T>({ url, data, options })
    case 'PATCH':
    case 'patch':
      return await handlePatch<T>({ url, data, options })
    case 'DELETE':
    case 'delete':
      return await handleDelete<T>({ url, options })
    default:
      throw new Error('Invalid request method.')
  }
}

export default request
