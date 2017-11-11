import expect from 'expect'
import clearHtmlTags from './clearHtmlTags'

describe('clearHtmlTags', () => {
  it('should return a string', () => {
    expect(typeof clearHtmlTags('test')).toEqual('string')
  })

  it('should return the same string', () => {
    expect(clearHtmlTags('test')).toEqual('test')
  })

  it('should return string without html tags', () => {
    expect(clearHtmlTags('<html>test</html>')).toEqual('test')
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
      expect(clearHtmlTags(testCase)).toEqual('')
    })
  })
})