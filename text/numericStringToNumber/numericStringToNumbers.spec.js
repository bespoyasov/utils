import expect from 'expect'
import numericStringToNumber from './numericStringToNumber'

describe('numericStringToNumber', () => {
  it('should return a number', () => {
    expect(typeof numericStringToNumber('42')).toEqual('number')
  })

  it('should return whole number', () => {
    expect(numericStringToNumber('42')).toEqual(42)
  })

  it('should return negative number', () => {
    expect(numericStringToNumber('-42')).toEqual(-42)
  })

  it('should return fraction', () => {
    expect(numericStringToNumber('.42')).toEqual(.42)
    expect(numericStringToNumber(',42')).toEqual(.42)
  })

  it('should return zero', () => {
    expect(numericStringToNumber(undefined)).toEqual(0)
    expect(numericStringToNumber('test')).toEqual(0)
    expect(numericStringToNumber(null)).toEqual(0)
    expect(numericStringToNumber({})).toEqual(0)
    expect(numericStringToNumber([])).toEqual(0)
    expect(numericStringToNumber()).toEqual(0)
  })
})