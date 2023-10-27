import request from '@helpers/request'

export type TFetcherProps = <T>(url: string) => Promise<void | Awaited<T> | any>

/**
 * Fetches data from the specified URL using a GET request.
 *
 * @param url - The URL to fetch data from.
 * @returns The response data from the specified URL.
 */
const fetcher: TFetcherProps = url =>
  request({
    method: 'GET',
    url
  })

export default fetcher
