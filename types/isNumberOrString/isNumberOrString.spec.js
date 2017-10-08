import expect from 'expect'
import isNumberOrString from './isNumberOrString'

describe('isNumberOrString', () => {
  it('should return a bool', () => {
    expect(typeof isNumberOrString('')).toEqual('boolean')
  })

  it('should return true', () => {
    expect(isNumberOrString(42)).toEqual(true)
    expect(isNumberOrString(.42)).toEqual(true)
    expect(isNumberOrString(-42)).toEqual(true)
    expect(isNumberOrString(new Number())).toEqual(true)
    expect(isNumberOrString('string')).toEqual(true)
    expect(isNumberOrString('45')).toEqual(true)
    expect(isNumberOrString('')).toEqual(true)
    expect(isNumberOrString(new String())).toEqual(true)
  })

  it('should return false', () => {
    expect(isNumberOrString(null)).toEqual(false)
    expect(isNumberOrString([])).toEqual(false)
    expect(isNumberOrString(undefined)).toEqual(false)
    expect(isNumberOrString(true)).toEqual(false)
    expect(isNumberOrString(() => {})).toEqual(false)
    expect(isNumberOrString(new Function())).toEqual(false)
    expect(isNumberOrString(NaN)).toEqual(false)
    expect(isNumberOrString(Infinity)).toEqual(false)
    expect(isNumberOrString(-Infinity)).toEqual(false)
  })
})