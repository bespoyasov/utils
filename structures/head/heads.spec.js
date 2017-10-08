import expect from 'expect'
import head from './head'

describe('head', () => {
  it('should return last element of array', () => {
    expect(head([1,2,3])).toEqual(1)
    expect(head(['test'])).toEqual('test')
  })

  it('should return null', () => {
    expect(head(undefined)).toEqual(null)
    expect(head(null)).toEqual(null)
    expect(head({})).toEqual(null)
    expect(head([])).toEqual(null)
    expect(head(5)).toEqual(null)
    expect(head()).toEqual(null)
  })
})