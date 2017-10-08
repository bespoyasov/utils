import expect from 'expect'
import isArray from './isArray'

describe('isArray', () => {
  it('should return a bool', () => {
    expect(typeof isArray('')).toEqual('boolean')
  })

  it('should return true', () => {
    expect(isArray([])).toEqual(true)
    expect(isArray([1,2,3])).toEqual(true)
    expect(isArray(new Array())).toEqual(true)
  })

  it('should return false', () => {
    expect(isArray(null)).toEqual(false)
    expect(isArray({})).toEqual(false)
    expect(isArray({'a':42})).toEqual(false)
    expect(isArray(new Object())).toEqual(false)
    expect(isArray(undefined)).toEqual(false)
    expect(isArray(true)).toEqual(false)
    expect(isArray(() => {})).toEqual(false)
    expect(isArray(new Function())).toEqual(false)
    expect(isArray(NaN)).toEqual(false)
    expect(isArray(Infinity)).toEqual(false)
    expect(isArray(-Infinity)).toEqual(false)
  })
})