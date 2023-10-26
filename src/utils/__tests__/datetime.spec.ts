import datetime from '@utils/datetime'

describe('datetime()', () => {
  it('should format a valid date string correctly', () => {
    const input = '2023-10-04T12:00:00Z'
    const expectedOutput = 'Wed Oct 04 2023 at 12:00:00 PM'
    expect(datetime(input)).toBe(expectedOutput)
  })

  it('should handle date strings with different times', () => {
    const input = '2023-10-04T15:30:15Z'
    const expectedOutput = 'Wed Oct 04 2023 at 3:30:15 PM'
    expect(datetime(input)).toBe(expectedOutput)
  })

  it('should handle different date strings', () => {
    const input = '2022-01-01T00:00:00Z'
    const expectedOutput = 'Sat Jan 01 2022 at 12:00:00 AM'
    expect(datetime(input)).toBe(expectedOutput)
  })

  it('should return "Invalid Date" for invalid date strings', () => {
    const input = 'invalid-date-string'
    expect(datetime(input)).toBe('Invalid Date')
  })
})
