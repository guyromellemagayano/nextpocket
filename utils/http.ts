import { AXIOS_INSTANCE } from '@config'
import { axios } from '@lib'

/**
 * A collection of HTTP methods for making requests using Axios.
 */
export const http = {
  /**
   * Sends a GET request to the specified URL.
   * @param url - The URL to send the request to.
   * @param config - Optional Axios configuration to use for the request.
   * @returns A Promise that resolves with the response data.
   */
  get: <T = any>(url: string, config?: typeof AXIOS_INSTANCE) =>
    axios.get<T>(url, config),

  /**
   * Sends a POST request to the specified URL.
   * @param url - The URL to send the request to.
   * @param data - Optional data to send with the request.
   * @param config - Optional Axios configuration to use for the request.
   * @returns A Promise that resolves with the response data.
   */
  post: <T = any>(url: string, data?: any, config?: typeof AXIOS_INSTANCE) =>
    axios.post<T>(url, data, config),

  /**
   * Sends a PUT request to the specified URL.
   * @param url - The URL to send the request to.
   * @param data - Optional data to send with the request.
   * @param config - Optional Axios configuration to use for the request.
   * @returns A Promise that resolves with the response data.
   */
  put: <T = any>(url: string, data?: any, config?: typeof AXIOS_INSTANCE) =>
    axios.put<T>(url, data, config),

  /**
   * Sends a DELETE request to the specified URL.
   * @param url - The URL to send the request to.
   * @param config - Optional Axios configuration to use for the request.
   * @returns A Promise that resolves with the response data.
   */
  delete: <T = any>(url: string, config?: typeof AXIOS_INSTANCE) =>
    axios.delete<T>(url, config),
}
