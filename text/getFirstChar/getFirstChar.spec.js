import expect from 'expect'
import getFirstChar from './getFirstChar'

describe('getFirstChar', () => {
  it('should return a string', () => {
    expect(typeof getFirstChar('test')).toEqual('string')
  })

  it('should return a string 1 character long', () => {
    expect(getFirstChar('test').length).toEqual(1)
  })

  it('should return "t"', () => {
    expect(getFirstChar('test')).toEqual('t')
  })

  it('should return "T"', () => {
    expect(getFirstChar('Test')).toEqual('T')
  })

  it('should return empty string', () => {
    expect(getFirstChar(undefined)).toEqual('')
    expect(getFirstChar(null)).toEqual('')
    expect(getFirstChar({})).toEqual('')
    expect(getFirstChar([])).toEqual('')
    expect(getFirstChar(5)).toEqual('')
    expect(getFirstChar()).toEqual('')
  })
})