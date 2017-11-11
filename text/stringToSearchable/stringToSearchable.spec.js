import expect from 'expect'
import stringToSearchable from './stringToSearchable'

describe('stringToSearchable', () => {
  it('should return a string', () => {
    expect(typeof stringToSearchable('test')).toEqual('string')
  })

  it('should return the same string', () => {
    expect(stringToSearchable('test')).toEqual('test')
    expect(stringToSearchable('test1234')).toEqual('test1234')
  })

  it('should return lowercased string', () => {
    expect(stringToSearchable('Test')).toEqual('test')
  })

  it('should return string without spaces', () => {
    expect(stringToSearchable('t e s t')).toEqual('test')
  })

  it('should convert to string and return', () => {
    expect(stringToSearchable(1234)).toEqual('1234')
  })

  it('should return empty string', () => {
    const cases = [
      undefined,
      null,
      {},
      []
    ]

    cases.forEach((testCase) => {
      expect(stringToSearchable(testCase)).toEqual('')
    })
  })
})