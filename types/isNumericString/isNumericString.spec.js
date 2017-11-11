import expect from 'expect'
import isNumericString from './isNumericString'

describe('isNumericString', () => {
  it('should return a boolean', () => {
    expect(typeof isNumericString('test')).toEqual('boolean')
  })

  it('should return true', () => {
    const cases = [
      '42',
      '-42',
      '4.2',
      '4,2'
    ]

    cases.forEach((testCase) => {
      expect(isNumericString(testCase)).toEqual(true)
    })
  })

  it('should return false', () => {
    const cases = [
      42,
      -42,
      '4.2.',
      '4,2,',
      '4,2.3',
      '4,2,3',
      'test',
      '.42.',
      undefined,
      [],
      {}
    ]

    cases.forEach((testCase) => {
      expect(isNumericString(testCase)).toEqual(false)
    })
  })
})