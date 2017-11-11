import expect from 'expect'
import dropRight from './dropRight'

describe('dropRight', () => {
  it('should be curried', () => {
    expect(typeof dropRight()).toEqual('function')
    expect(typeof dropRight()()).toEqual('object')
  })

  it('should return empty array', () => {
    const cases = [
      [undefined, undefined],
      [[], undefined],
      [undefined, 1],
      [[], 1],
      [[1], 1]
    ]

    cases.forEach((testCase) => {
      const [a, b] = testCase
      expect(dropRight(a)(b).length).toEqual(0)
    })
  })

  it('should return array of 1 element', () => {
    const cases = [
      [[1], 0],
      [[1,2], 1],
      [[1,2,3], 2]
    ]

    cases.forEach((testCase) => {
      const [a, b] = testCase
      expect(dropRight(a)(b).length).toEqual(1)
    })
  })

  it('should return empty array', () => {
    const cases = [
      [undefined, undefined],
      ['test', undefined],
      [null, undefined],
      [42, undefined],
      [{}, undefined]
    ]

    cases.forEach((testCase) => {
      const [a, b] = testCase
      expect(dropRight(a)(b).length).toEqual(0)
    })
  })
})