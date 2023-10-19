import { request } from '@helpers'
import { fetcher } from '@utils'

// Mock the request helper function
jest.mock('@helpers', () => ({
  request: jest.fn(),
}))

describe('fetcher', () => {
  beforeEach(() => {
    // Clear all instances and calls to the mock
    ;(request as jest.Mock).mockClear()
  })

  it('should make a GET request to the provided URL', async () => {
    const mockURL = 'https://api.example.com/data'
    const mockData = { data: 'test' }

    // Mock the implementation of the request function to return our mockData
    ;(request as jest.Mock).mockResolvedValueOnce(mockData)

    const result = await fetcher(mockURL)

    expect(request).toHaveBeenCalledWith({
      method: 'GET',
      url: mockURL,
    })
    expect(result).toEqual(mockData)
  })

  it('should throw an error when the request fails', async () => {
    const mockURL = 'https://api.example.com/data'
    const mockError = new Error('Network error')

    // Mock the implementation of the request function to throw an error
    ;(request as jest.Mock).mockRejectedValueOnce(mockError)

    await expect(fetcher(mockURL)).rejects.toThrow('Network error')
  })
})
