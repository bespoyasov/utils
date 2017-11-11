import expect from 'expect'
import isArray from './isArray'

describe('isArray', () => {
  it('should return a bool', () => {
    expect(typeof isArray('')).toEqual('boolean')
  })

  it('should return true', () => {
    const cases = [
      [],
      [1,2,3],
      new Array()
    ]

    cases.forEach((testCase) => {
      expect(isArray(testCase)).toEqual(true)
    })
  })

  it('should return false', () => {
    const cases = [
      null,
      {},
      {'a':42},
      new Object(),
      undefined,
      true,
      () => {},
      new Function(),
      NaN,
      Infinity,
      -Infinity,
    ]

    cases.forEach((testCase) => {
      expect(isArray(testCase)).toEqual(false)
    })
  })
})