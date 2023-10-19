import { arrayFilter } from '@utils'

describe('arrayFilter', () => {
  const sampleArray = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' },
    { id: 4, name: 'Smith' },
  ]

  it('filters by key and value array (include)', () => {
    // const result = arrayFilter(sampleArray, 'name', ['John', 'Jane'])
    const result = arrayFilter({
      array: sampleArray,
      key: 'name',
      values: ['John', 'Jane'],
    })
    expect(result).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ])
  })

  it('filters by key and value array (exclude)', () => {
    const result = arrayFilter({
      array: sampleArray,
      key: 'name',
      values: ['John', 'Jane'],
      exclude: true,
    })
    expect(result).toEqual([
      { id: 3, name: 'Doe' },
      { id: 4, name: 'Smith' },
    ])
  })

  it('filters with conditionValue (truthy)', () => {
    const result = arrayFilter({
      array: sampleArray,
      key: 'name',
      values: ['John', 'Jane'],
      conditionValue: true,
    })
    expect(result).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ])
  })

  it('filters with conditionValue (falsy)', () => {
    const result = arrayFilter({
      array: sampleArray,
      key: 'name',
      values: ['Doe', 'Smith'],
      conditionValue: false,
    })
    expect(result).toEqual([
      { id: 3, name: 'Doe' },
      { id: 4, name: 'Smith' },
    ])
  })
})
