import { API_HOST_LOCAL } from './env'

export const AXIOS_INSTANCE = {
  baseURL: API_HOST_LOCAL,
  headers: {
    'Cache-Control': 'no-cache',
  },
}
