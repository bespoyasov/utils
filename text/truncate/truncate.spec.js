import expect from 'expect'
import truncate from './truncate'

describe('truncate', () => {
  it('should return a string', () => {
    expect(typeof truncate('test')).toEqual('string')
  })

  it('without config should return the same string', () => {
    expect(truncate('test')).toEqual('test')
  })

  it('with config should return the same string', () => {
    expect(truncate('test', {len: 100})).toEqual('test')
  })

  it('should return truncated string', () => {
    expect(truncate('test string', {len: 5})).toEqual('test ...')
  })

  it('should return truncated string with custom character at the end', () => {
    expect(truncate('test string', {len: 5, char: 'x'})).toEqual('test x')
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
      expect(truncate(testCase)).toEqual('')
    })
  })
})