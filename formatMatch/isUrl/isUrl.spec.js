import expect from 'expect'
import isUrl from './isUrl'

describe('isUrl', () => {
  it('should return a boolean', () => {
    expect(typeof isUrl('test')).toEqual('boolean')
  })

  it('should return true', () => {
    expect(isUrl('test.z')).toEqual(true)
    expect(isUrl('test.io')).toEqual(true)
    expect(isUrl('test.com')).toEqual(true)
    expect(isUrl('test.test')).toEqual(true)
    expect(isUrl('http://test.com')).toEqual(true)
    expect(isUrl('www.test.com')).toEqual(true)
  })

  it('should return false', () => {
    expect(isUrl('.test')).toEqual(false)
    expect(isUrl('test.')).toEqual(false)
    expect(isUrl('test')).toEqual(false)
    expect(isUrl('')).toEqual(false)
    expect(isUrl()).toEqual(false)
    expect(isUrl(42)).toEqual(false)
    expect(isUrl([])).toEqual(false)
    expect(isUrl({})).toEqual(false)
    expect(isUrl(() => {})).toEqual(false)
  })
})