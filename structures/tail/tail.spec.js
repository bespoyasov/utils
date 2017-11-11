import expect from 'expect'
import tail from './tail'

describe('tail', () => {
  it('should return last element of array', () => {
    expect(tail([1,2,3])).toEqual(3)
    expect(tail(['test'])).toEqual('test')
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
      expect(tail(testCase)).toEqual(null)
    })
  })
})