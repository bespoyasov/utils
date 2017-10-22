import expect from 'expect'
import isNumericString from './isNumericString'

describe('isNumericString', () => {
  it('should return a boolean', () => {
    expect(typeof isNumericString('test')).toEqual('boolean')
  })

  it('should return true', () => {
    expect(isNumericString('42')).toEqual(true)
    expect(isNumericString('-42')).toEqual(true)
    expect(isNumericString('4.2')).toEqual(true)
    expect(isNumericString('4,2')).toEqual(true)
  })

  it('should return false', () => {
    expect(isNumericString(42)).toEqual(false)
    expect(isNumericString(-42)).toEqual(false)
    expect(isNumericString('4.2.')).toEqual(false)
    expect(isNumericString('4,2,')).toEqual(false)
    expect(isNumericString('4,2.3')).toEqual(false)
    expect(isNumericString('4,2,3')).toEqual(false)
    expect(isNumericString('test')).toEqual(false)
    expect(isNumericString('.42.')).toEqual(false)
    expect(isNumericString()).toEqual(false)
    expect(isNumericString([])).toEqual(false)
    expect(isNumericString({})).toEqual(false)
  })
})