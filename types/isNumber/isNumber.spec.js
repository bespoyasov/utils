import expect from 'expect'
import isNumber from './isNumber'

describe('isNumber', () => {
  it('should return a bool', () => {
    expect(typeof isNumber('')).toEqual('boolean')
  })

  it('should return true', () => {
    expect(isNumber(42)).toEqual(true)
    expect(isNumber(.42)).toEqual(true)
    expect(isNumber(-42)).toEqual(true)
    expect(isNumber(new Number())).toEqual(true)
    expect(isNumber(Math.PI)).toEqual(true)
  })

  it('should return false', () => {
    expect(isNumber('string')).toEqual(false)
    expect(isNumber(null)).toEqual(false)
    expect(isNumber([])).toEqual(false)
    expect(isNumber(undefined)).toEqual(false)
    expect(isNumber(true)).toEqual(false)
    expect(isNumber(() => {})).toEqual(false)
    expect(isNumber(new Function())).toEqual(false)
    expect(isNumber(NaN)).toEqual(false)
    expect(isNumber(Infinity)).toEqual(false)
    expect(isNumber(-Infinity)).toEqual(false)
  })
})