import { request } from '@helpers'

/**
 * Fetches data from the specified URL using a GET request.
 * @param url - The URL to fetch data from.
 * @returns The response data from the specified URL.
 */
const fetcher = (url: string): any =>
  request({
    method: 'GET',
    url,
  })

export default fetcher
