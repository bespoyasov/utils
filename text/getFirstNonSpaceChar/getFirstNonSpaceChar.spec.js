import expect from 'expect'
import getFirstNonSpaceChar from './getFirstNonSpaceChar'

describe('getFirstNonSpaceChar', () => {
  it('should return a string', () => {
    expect(typeof getFirstNonSpaceChar('test')).toEqual('string')
  })

  it('should return string 1 character long', () => {
    expect(getFirstNonSpaceChar('test').length).toEqual(1)
  })

  it('should return "t"', () => {
    expect(getFirstNonSpaceChar('test')).toEqual('t')
  })

  it('should return "T"', () => {
    expect(getFirstNonSpaceChar('Test')).toEqual('T')
  })

  it('should return "t"', () => {
    expect(getFirstNonSpaceChar('     test')).toEqual('t')
  })

  it('should return "T"', () => {
    expect(getFirstNonSpaceChar('     Test')).toEqual('T')
  })

  it('should return empty string', () => {
    const cases = [
      undefined,
      null,
      {},
      [],
      5
    ]

    cases.forEach((testCase) => {
      expect(getFirstNonSpaceChar(testCase)).toEqual('')
    })
  })
})