import axios, { AxiosError } from 'axios'

import { AXIOS_INSTANCE } from '@config'

const instance = axios.create(AXIOS_INSTANCE)

instance.interceptors.request.use(
  config => {
    config.params = {
      ...config.params,
      _: Date.now(),
    }

    return config
  },
  error => Promise.reject(error),
)

instance.interceptors.response.use(
  response => response,
  (error: AxiosError) => Promise.reject(error),
)

export default instance
