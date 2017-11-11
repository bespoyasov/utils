import expect from 'expect'
import isEmail from './isEmail'

describe('isEmail', () => {
  it('should return a boolean', () => {
    expect(typeof isEmail('test')).toEqual('boolean')
  })

  it('should return true', () => {
    const cases = [
      'test@gmail.com',
      'test@me.com',
      't@gmail.com',
      'test@g.io',
      't@g.z',
    ]

    cases.forEach((testCase) => {
      expect(isEmail(testCase)).toEqual(true)
    })
  })

  it('should return false', () => {
    const cases = [
      '@gmail.com',
      'test@gmail.',
      'test@gmailcom',
      'test.gmail@com',
      '',
      42,
      [],
      {},
      () => {},
      undefined,
      null,
      Math
    ]

    cases.forEach((testCase) => {
      expect(isEmail(testCase)).toEqual(false)
    })
  })
})