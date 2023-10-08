import type { SWRConfiguration, SWRResponse } from 'swr'
import useSWR from 'swr'

import { fetcher } from '@utils'

/**
 * Fetches data from an API endpoint using SWR
 */
const swr = <T = any>(
  url: string,
  options?: SWRConfiguration,
): SWRResponse<T, any> => {
  const { data, error, isLoading, isValidating, mutate } = useSWR<T>(
    url,
    fetcher,
    options,
  )

  return {
    data,
    error,
    isLoading,
    isValidating,
    mutate,
  }
}

export default swr
