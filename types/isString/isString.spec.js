import expect from 'expect'
import isString from './isString'

describe('isString', () => {
  it('should return a bool', () => {
    expect(typeof isString('')).toEqual('boolean')
  })

  it('should return true', () => {
    const cases = [
      'string',
      '45',
      '',
      new String()
    ]

    cases.forEach((testCase) => {
      expect(isString(testCase)).toEqual(true)
    })
  })

  it('should return false', () => {
    const cases = [
      45,
      null,
      [],
      {name: 'string'},
      undefined,
      true,
      () => {},
      new Function(),
      NaN,
      Infinity,
      -Infinity
    ]

    cases.forEach((testCase) => {
      expect(isString(testCase)).toEqual(false)
    })
  })
})