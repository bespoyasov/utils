import expect from 'expect'
import removePunctuation from './removePunctuation'

describe('removePunctuation', () => {
  it('should return a string', () => {
    expect(typeof removePunctuation('test')).toEqual('string')
  })

  it('should return the same string', () => {
    expect(removePunctuation('test')).toEqual('test')
  })

  it('should return string without punctuation', () => {
    expect(removePunctuation('test,.:;?!(){}[]=-+/<>')).toEqual('test')
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
      expect(removePunctuation(testCase)).toEqual('')
    })
  })
})