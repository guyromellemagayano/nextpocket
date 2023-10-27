import axios, { AxiosError } from 'axios'

import { POCKETBASE_API_URL } from '@configs/env'

export type TAxiosErrorResponse<T = any> = T & {
  message?: string
}

export const AXIOS_INSTANCE = {
  baseURL: POCKETBASE_API_URL,
  headers: {
    'Cache-Control': 'no-cache'
  }
}

/**
 * Handles errors thrown by Axios requests.
 *
 * @param err - The error object thrown by Axios.
 * @returns If the error is not a server response error, returns void. Otherwise, returns a promise that resolves to type T.
 * @throws An error message describing the error that occurred.
 */
export const handleError = <T = any>(
  err: AxiosError<TAxiosErrorResponse>
): void | Awaited<T> => {
  const axiosError = err as AxiosError<TAxiosErrorResponse>

  if (axiosError.response) {
    // Server responded with a status other than 2xx
    throw new Error(
      axiosError.response.data.message ||
        'An error occurred while fetching data.'
    )
  } else if (axiosError.request) {
    // Request was made, but no response received
    throw new Error('No response received from server.')
  } else {
    // Error setting up the request
    throw new Error(axiosError.message)
  }
}

/**
 * Creates an Axios instance with the provided configuration.
 *
 * @param config - The configuration object for the Axios instance.
 * @returns The newly created Axios instance.
 */
const axiosInstance = axios.create(AXIOS_INSTANCE)

axiosInstance.interceptors.request.use(
  config => {
    config.params = {
      ...config.params
    }

    return config
  },
  error => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError) => Promise.reject(error)
)

export default axiosInstance
