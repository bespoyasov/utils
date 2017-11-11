import expect from 'expect'
import isNumberOrString from './isNumberOrString'

describe('isNumberOrString', () => {
  it('should return a bool', () => {
    expect(typeof isNumberOrString('')).toEqual('boolean')
  })

  it('should return true', () => {
    const cases = [
      42,
      .42,
      -42,
      new Number(),
      'string',
      '45',
      '',
      new String()
    ]

    cases.forEach((testCase) => {
      expect(isNumberOrString(testCase)).toEqual(true)
    })
  })

  it('should return false', () => {
    const cases = [
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
      expect(isNumberOrString(testCase)).toEqual(false)
    })
  })
})