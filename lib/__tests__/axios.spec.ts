/* eslint-disable import/order */
import mockAxios from 'jest-mock-axios'

import { API_HOST_LOCAL } from '@config/env'

// Mock the default `axios` instance
// Mock only the `create` method of `axios` and return a mocked instance with interceptors
jest.mock('axios', () => {
  const jestMockAxios = require('jest-mock-axios').default

  const mockInstance = {
    ...jestMockAxios,
    interceptors: {
      request: {
        use: jest.fn()
      },
      response: {
        use: jest.fn()
      }
    },
    defaults: {
      baseURL: API_HOST_LOCAL,
      headers: {
        'Cache-Control': 'no-cache'
      }
    }
  }

  return {
    ...jestMockAxios,
    create: jest.fn(() => mockInstance)
  }
})

import axiosInstance, { AXIOS_INSTANCE, handleError } from '@lib/axios'

describe('handleError()', () => {
  it('throws an error with server response message', () => {
    const errorMessage = 'Server Error'
    const error = {
      response: {
        data: {
          message: errorMessage
        }
      }
    } as any
    expect(() => handleError(error)).toThrow(errorMessage)
  })

  it('throws a generic error message when server response does not contain a message', () => {
    const error = {
      response: {
        data: {}
      }
    } as any
    expect(() => handleError(error)).toThrow(
      'An error occurred while fetching data.'
    )
  })

  it('throws an error when no response is received from the server', () => {
    const error = {
      request: {}
    } as any
    expect(() => handleError(error)).toThrow(
      'No response received from server.'
    )
  })

  it('throws an error when setting up the request', () => {
    const errorMessage = 'Setup Error'
    const error = {
      message: errorMessage
    } as any
    expect(() => handleError(error)).toThrow(errorMessage)
  })
})

describe('axiosInstance', () => {
  it('creates an instance with the provided configuration', () => {
    for (const [key, value] of Object.entries(AXIOS_INSTANCE)) {
      expect(axiosInstance.defaults[key]).toEqual(value)
    }
  })

  it('intercepts requests and merges parameters', async () => {
    const response = { data: 'data' }
    const params = { param1: 'value1' }

    axiosInstance.get('/test', { params })
    mockAxios.mockResponse(response)

    // Accessing the mocked get call directly from axiosInstance
    const mockedFunction = axiosInstance.get as jest.MockedFunction<any>
    const calledWithArgs = mockedFunction.mock.calls[0]

    if (!calledWithArgs || calledWithArgs.length === 0) {
      throw new Error('No request captured by mockAxios.')
    }

    const url = calledWithArgs[0]
    const config = calledWithArgs[1]

    expect(url).toBe('/test')
    expect(config.params).toEqual(params)
  })

  it('intercepts and handles response', async () => {
    const response = {
      data: 'data',
      headers: {},
      status: 200,
      statusText: 'OK',
      config: {}
    }

    const promise = axiosInstance.get('/test')
    mockAxios.mockResponse(response)

    await expect(promise).resolves.toEqual(response)
  })

  it('intercepts and handles error', async () => {
    const errorResponse = { status: 404, statusText: 'Not Found' }
    const promise = axiosInstance.get('/test')

    mockAxios.mockError(errorResponse)
    await expect(promise).rejects.toEqual(expect.anything())
  })
})
