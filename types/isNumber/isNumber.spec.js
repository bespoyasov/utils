import expect from 'expect'
import isNumber from './isNumber'

describe('isNumber', () => {
  it('should return a bool', () => {
    expect(typeof isNumber('')).toEqual('boolean')
  })

  it('should return true', () => {
    const cases = [
      42,
      .42,
      -42,
      new Number(),
      Math.PI
    ]

    cases.forEach((testCase) => {
      expect(isNumber(testCase)).toEqual(true)
    })
  })

  it('should return false', () => {
    const cases = [
      'string',
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
      expect(isNumber(testCase)).toEqual(false)
    })
  })
})