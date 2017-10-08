import expect from 'expect'
import isString from './isString'

describe('isString', () => {
  it('should return a bool', () => {
    expect(typeof isString('')).toEqual('boolean')
  })

  it('should return true', () => {
    expect(isString('string')).toEqual(true)
    expect(isString('45')).toEqual(true)
    expect(isString('')).toEqual(true)
    expect(isString(new String())).toEqual(true)
  })

  it('should return false', () => {
    expect(isString(45)).toEqual(false)
    expect(isString(null)).toEqual(false)
    expect(isString([])).toEqual(false)
    expect(isString({name: 'string'})).toEqual(false)
    expect(isString(undefined)).toEqual(false)
    expect(isString()).toEqual(false)
    expect(isString(true)).toEqual(false)
    expect(isString(() => {})).toEqual(false)
    expect(isString(new Function())).toEqual(false)
    expect(isString(NaN)).toEqual(false)
    expect(isString(Infinity)).toEqual(false)
    expect(isString(-Infinity)).toEqual(false)
  })
})