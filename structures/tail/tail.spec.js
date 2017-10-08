import expect from 'expect'
import tail from './tail'

describe('tail', () => {
  it('should return last element of array', () => {
    expect(tail([1,2,3])).toEqual(3)
    expect(tail(['test'])).toEqual('test')
  })

  it('should return null', () => {
    expect(tail(undefined)).toEqual(null)
    expect(tail(null)).toEqual(null)
    expect(tail({})).toEqual(null)
    expect(tail([])).toEqual(null)
    expect(tail(5)).toEqual(null)
    expect(tail()).toEqual(null)
  })
})