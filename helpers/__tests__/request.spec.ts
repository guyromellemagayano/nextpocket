import mockAxios from 'jest-mock-axios'

import { API_HOST_LOCAL } from '@config'
import { request } from '@helpers'
import { axiosInstance } from '@lib'

// Mock the custom `axios` instance
jest.mock('@lib', () => ({
  axiosInstance: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn()
  }
}))

describe('request()', () => {
  const API_MOCK = `${API_HOST_LOCAL}/api`

  beforeEach(() => {
    // Reset `axios` mocks
    ;(axiosInstance.get as jest.Mock).mockReset()
    ;(axiosInstance.post as jest.Mock).mockReset()
    ;(axiosInstance.put as jest.Mock).mockReset()
    ;(axiosInstance.patch as jest.Mock).mockReset()
    ;(axiosInstance.delete as jest.Mock).mockReset()

    // Reset other axios mocks (if using `jest-mock-axios`)
    mockAxios.reset()
  })

  afterEach(() => {
    // Clear all mocks to ensure no state leaks
    jest.clearAllMocks()
  })

  it('Handles a successful GET request', async () => {
    // Actual API response from the mock server
    const mockResponse = {
      page: 1,
      perPage: 30,
      totalItems: 1,
      totalPages: 1,
      items: [
        {
          avatar: 'https://example.com/image.jpg',
          collectionId: 'id123',
          collectionName: 'genericName',
          company: 'GenericCompany',
          created: '2023-01-01 00:00:00.000Z',
          department: 'GenericDepartment',
          id: 'id456',
          name: 'GenericName',
          title: 'GenericTitle',
          updated: '2023-01-01 00:01:00.000Z'
        }
      ]
    }

    // Mock the GET request for the custom `axios` instance
    ;(axiosInstance.get as jest.Mock).mockResolvedValue({ data: mockResponse })

    const result = await request({
      method: 'get',
      url: `${API_MOCK}/collections/notes/records`
    })

    expect(result).toEqual(mockResponse)
    expect(axiosInstance.get).toHaveBeenCalledWith(
      `${API_MOCK}/collections/notes/records`,
      undefined
    )
  })

  it('Handles a failed GET request', async () => {
    const mockError = new Error()

    // Mock the GET request for the custom `axios` instance to reject with an error
    ;(axiosInstance.get as jest.Mock).mockRejectedValue(mockError)

    let error: unknown

    try {
      await request({
        method: 'get',
        url: `${API_MOCK}//collections/notes/records`
      })
    } catch (err) {
      error = err
    }

    expect(error).toBeInstanceOf(Error)
    expect(axiosInstance.get).toHaveBeenCalledWith(
      `${API_MOCK}//collections/notes/records`,
      undefined
    )
  })

  it('Handles a successful POST request', async () => {
    const mockData = {
      page: 1,
      perPage: 30,
      totalItems: 1,
      totalPages: 1,
      items: [
        {
          avatar: 'https://example.com/image.jpg',
          collectionId: 'id123',
          collectionName: 'genericName',
          company: 'GenericCompany',
          created: '2023-01-01 00:00:00.000Z',
          department: 'GenericDepartment',
          id: 'id456',
          name: 'GenericName',
          title: 'GenericTitle',
          updated: '2023-01-01 00:01:00.000Z'
        }
      ]
    }
    const payload = {
      avatar: 'https://example.com/image2.jpg',
      collectionId: 'id789',
      collectionName: 'anotherGenericName',
      company: 'AnotherGenericCompany',
      created: '2023-01-02 00:00:00.000Z',
      department: 'AnotherGenericDepartment',
      id: 'id012',
      name: 'AnotherGenericName',
      title: 'AnotherGenericTitle',
      updated: '2023-01-02 00:01:00.000Z'
    }

    // Mock the POST request for the custom `axios` instance
    ;(axiosInstance.post as jest.Mock).mockResolvedValue({ data: mockData })

    const result = await request({
      method: 'post',
      url: `${API_MOCK}/collections/notes/records`,
      data: payload
    })

    expect(result).toEqual(mockData)
    expect(axiosInstance.post).toHaveBeenCalledWith(
      `${API_MOCK}/collections/notes/records`,
      payload,
      undefined
    )
  })

  it('Handles a failed POST request', async () => {
    // Mocked error payload
    const mockErrorData = new Error()
    const mockError = { response: { data: mockErrorData } }

    // Mock the POST request to reject with the specified error
    ;(axiosInstance.post as jest.Mock).mockRejectedValue(mockError)

    let error: unknown

    const payload = {
      avatar: 'https://example.com/image3.jpg',
      company: 'YetAnotherGenericCompany',
      department: 'YetAnotherGenericDepartment',
      name: 'YetAnotherGenericName',
      title: 'YetAnotherGenericTitle'
    }

    try {
      await request({
        method: 'post',
        url: `${API_MOCK}/collections/notes/records`,
        data: payload
      })
    } catch (err) {
      error = err
    }

    expect(error).toBeInstanceOf(Error)
    expect(axiosInstance.post).toHaveBeenCalledWith(
      `${API_MOCK}/collections/notes/records`,
      payload,
      undefined
    )
  })

  it('Handles a successful PUT request', async () => {
    const mockData = {
      avatar: 'https://example.com/image4.jpg',
      collectionId: 'id345',
      collectionName: 'someGenericName',
      company: 'SomeGenericCompany',
      created: '2023-01-03 00:00:00.000Z',
      department: 'SomeGenericDepartment',
      id: 'id678',
      name: 'SomeGenericName',
      title: 'SomeGenericTitle',
      updated: '2023-01-03 00:01:00.000Z'
    }
    const payload = {
      company: 'UpdatedGenericCompany',
      department: 'UpdatedGenericDepartment',
      name: 'UpdatedGenericName',
      title: 'UpdatedGenericTitle'
    }

    // Mock the PUT request for the custom `axios` instance
    ;(axiosInstance.put as jest.Mock).mockResolvedValue({ data: mockData })

    const result = await request({
      method: 'put',
      url: `${API_MOCK}/collections/notes/records/4qlt1663bne0nbm`,
      data: payload
    })

    expect(result).toEqual(mockData)
    expect(axiosInstance.put).toHaveBeenCalledWith(
      `${API_MOCK}/collections/notes/records/4qlt1663bne0nbm`,
      payload,
      undefined
    )
  })

  it('Handles a failed PUT request', async () => {
    // Mocked error payload
    const mockErrorData = new Error()
    const mockError = { response: { data: mockErrorData } }

    // Mock the PUT request to reject with the specified error
    ;(axiosInstance.put as jest.Mock).mockRejectedValue(mockError)

    let error: unknown

    const payload = {
      company: 'UpdatedGenericCompany',
      department: 'UpdatedGenericDepartment',
      name: 'UpdatedGenericName',
      title: 'UpdatedGenericTitle'
    }

    try {
      await request({
        method: 'put',
        url: `${API_MOCK}/collections/notes/records/4qlt1663bne0nbm`,
        data: payload
      })
    } catch (err) {
      error = err
    }

    expect(error).toBeInstanceOf(Error)
    expect(axiosInstance.put).toHaveBeenCalledWith(
      `${API_MOCK}/collections/notes/records/4qlt1663bne0nbm`,
      payload,
      undefined
    )
  })

  it('Handles a successful PATCH request', async () => {
    const mockData = {
      avatar: 'https://example.com/image5.jpg',
      collectionId: 'id890',
      collectionName: 'patchedGenericName',
      company: 'PatchedGenericCompany',
      created: '2023-01-04 00:00:00.000Z',
      department: 'PatchedGenericDepartment',
      id: 'id901',
      name: 'PatchedGenericName',
      title: 'PatchedGenericTitle',
      updated: '2023-01-04 00:01:00.000Z'
    }
    const payload = {
      company: 'PatchedAgainGenericCompany',
      department: 'PatchedAgainGenericDepartment',
      name: 'PatchedAgainGenericName',
      title: 'PatchedAgainGenericTitle'
    }

    // Mock the PATCH request for the custom axios instance
    ;(axiosInstance.patch as jest.Mock).mockResolvedValue({ data: mockData })

    const result = await request({
      method: 'patch',
      url: `${API_MOCK}/collections/notes/records/id901`,
      data: payload
    })

    expect(result).toEqual(mockData)
    expect(axiosInstance.patch).toHaveBeenCalledWith(
      `${API_MOCK}/collections/notes/records/id901`,
      payload,
      undefined
    )
  })

  it('Handles a failed PATCH request', async () => {
    const mockErrorData = new Error()
    const mockError = { response: { data: mockErrorData } }

    // Mock the PATCH request to reject with the specified error
    ;(axiosInstance.patch as jest.Mock).mockRejectedValue(mockError)

    let error: unknown

    const payload = {
      company: 'FailedPatchCompany',
      department: 'FailedPatchDepartment',
      name: 'FailedPatchName',
      title: 'FailedPatchTitle'
    }

    try {
      await request({
        method: 'patch',
        url: `${API_MOCK}/collections/notes/records/id901`,
        data: payload
      })
    } catch (err) {
      error = err
    }

    expect(error).toBeInstanceOf(Error)
    expect(axiosInstance.patch).toHaveBeenCalledWith(
      `${API_MOCK}/collections/notes/records/id901`,
      payload,
      undefined
    )
  })

  it('Handles a successful DELETE request', async () => {
    const mockData = {
      message: 'Record successfully deleted'
    }

    // Mock the DELETE request for the custom axios instance
    ;(axiosInstance.delete as jest.Mock).mockResolvedValue({ data: mockData })

    const result = await request({
      method: 'delete',
      url: `${API_MOCK}/collections/notes/records/id901`
    })

    expect(result).toEqual(mockData)
    expect(axiosInstance.delete).toHaveBeenCalledWith(
      `${API_MOCK}/collections/notes/records/id901`,
      undefined
    )
  })

  it('Handles a failed DELETE request', async () => {
    const mockErrorData = new Error()
    const mockError = { response: { data: mockErrorData } }

    // Mock the DELETE request to reject with the specified error
    ;(axiosInstance.delete as jest.Mock).mockRejectedValue(mockError)

    let error: unknown

    try {
      await request({
        method: 'delete',
        url: `${API_MOCK}/collections/notes/records/id901`
      })
    } catch (err) {
      error = err
    }

    expect(error).toBeInstanceOf(Error)
    expect(axiosInstance.delete).toHaveBeenCalledWith(
      `${API_MOCK}/collections/notes/records/id901`,
      undefined
    )
  })
})
