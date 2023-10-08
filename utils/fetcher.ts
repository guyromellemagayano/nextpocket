import { useRequest } from '@hooks'

const fetcher = (url: string) =>
  useRequest({
    method: 'GET',
    url,
  })

export default fetcher
