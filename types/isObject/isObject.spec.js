import expect from 'expect'
import isObject from './isObject'

describe('isObject', () => {
  it('should return a bool', () => {
    expect(typeof isObject('')).toEqual('boolean')
  })

  it('should return true', () => {
    const cases = [
      {a: 'a'},
      {},
      new Object()
    ]

    cases.forEach((testCase) => {
      expect(isObject(testCase)).toEqual(true)
    })
  })

  it('should return false', () => {
    const cases = [
      'string',
      42,
      null,
      [],
      undefined,
      true,
      () => {},
      new Function(),
      NaN,
      Infinity,
      -Infinity
    ]

    cases.forEach((testCase) => {
      expect(isObject(testCase)).toEqual(false)
    })
  })
})