import { arrayFilter } from '@utils'

describe('arrayFilter', () => {
  const sampleArray = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' },
    { id: 4, name: 'Smith' },
  ]

  it('filters by key and value array (include)', () => {
    const result = arrayFilter(sampleArray, 'name', ['John', 'Jane'])
    expect(result).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ])
  })

  it('filters by key and value array (exclude)', () => {
    const result = arrayFilter(sampleArray, 'name', ['Doe', 'Smith'], true)
    expect(result).toEqual([
      { id: 3, name: 'Doe' },
      { id: 4, name: 'Smith' },
    ])
  })

  it('filters with conditionValue (truthy)', () => {
    const result = arrayFilter(sampleArray, 'name', ['John', 'Jane'], true)
    expect(result).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ])
  })

  it('filters with conditionValue (falsy)', () => {
    const result = arrayFilter(sampleArray, 'name', ['Doe', 'Smith'], false)
    expect(result).toEqual([
      { id: 3, name: 'Doe' },
      { id: 4, name: 'Smith' },
    ])
  })
})
