import expect from 'expect'
import isUrl from './isUrl'

describe('isUrl', () => {
  it('should return a boolean', () => {
    expect(typeof isUrl('test')).toEqual('boolean')
  })

  it('should return true', () => {
    const cases = [
      'test.z',
      'test.io',
      'test.com',
      'test.test',
      'http://test.com',
      'www.test.com'
    ]

    cases.forEach((testCase) => {
      expect(isUrl(testCase)).toEqual(true)
    })
  })

  it('should return false', () => {
    const cases = [
      '.test',
      'test.',
      'test',
      '',
      42,
      [],
      {},
      () => {},
      undefined
    ]

    cases.forEach((testCase) => {
      expect(isUrl(testCase)).toEqual(false)
    })
  })
})