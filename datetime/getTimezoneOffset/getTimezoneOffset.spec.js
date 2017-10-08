import expect from 'expect'
import getTimezoneOffset from './getTimezoneOffset'

describe('getTimezoneOffset', () => {
  it('should return a number', () => {
    expect(typeof getTimezoneOffset()).toEqual('number')
  })
  
  it('should return a number of milliseconds', () => {
    const offset = (new Date).getTimezoneOffset()
    expect(getTimezoneOffset() / offset).toEqual(60 * 1000)
  })
})