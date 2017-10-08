import expect from 'expect'
import isObject from './isObject'

describe('isObject', () => {
  it('should return a bool', () => {
    expect(typeof isObject('')).toEqual('boolean')
  })

  it('should return true', () => {
    expect(isObject({a: 'a'})).toEqual(true)
    expect(isObject({})).toEqual(true)
    expect(isObject(new Object())).toEqual(true)
  })

  it('should return false', () => {
    expect(isObject('string')).toEqual(false)
    expect(isObject(42)).toEqual(false)
    expect(isObject(null)).toEqual(false)
    expect(isObject([])).toEqual(false)
    expect(isObject(undefined)).toEqual(false)
    expect(isObject(true)).toEqual(false)
    expect(isObject(() => {})).toEqual(false)
    expect(isObject(new Function())).toEqual(false)
    expect(isObject(NaN)).toEqual(false)
    expect(isObject(Infinity)).toEqual(false)
    expect(isObject(-Infinity)).toEqual(false)
  })
})