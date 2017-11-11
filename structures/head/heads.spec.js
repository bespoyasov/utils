import expect from 'expect'
import head from './head'

describe('head', () => {
  it('should return last element of array', () => {
    expect(head([1,2,3])).toEqual(1)
    expect(head(['test'])).toEqual('test')
  })

  it('should return null', () => {
    const cases = [
      undefined,
      null,
      {},
      [],
      5
    ]

    cases.forEach((testCase) => {
      expect(head(testCase)).toEqual(null)
    })
  })
})