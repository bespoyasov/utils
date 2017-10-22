import expect from 'expect'
import isMobilePhone from './isMobilePhone'

describe('isMobilePhone', () => {
  it('should return a boolean', () => {
    expect(typeof isMobilePhone('test')).toEqual('boolean')
  })

  it('should return true', () => {
    expect(isMobilePhone('89991112233')).toEqual(true)
    expect(isMobilePhone('+79991112233')).toEqual(true)
    expect(isMobilePhone('+7 999 1112233')).toEqual(true)
    expect(isMobilePhone('+7 999 111 22 33')).toEqual(true)
    expect(isMobilePhone('+7 (999) 1112233')).toEqual(true)
    expect(isMobilePhone('+7 (999) 111-22-33')).toEqual(true)
    expect(isMobilePhone('+7 (999) 111 22 33')).toEqual(true)
    expect(isMobilePhone(89991112233)).toEqual(true)
    expect(isMobilePhone(79991112233)).toEqual(true)
  })

  it('should return false', () => {
    expect(isMobilePhone('89991112233z')).toEqual(false)
    expect(isMobilePhone('8999111223Z3')).toEqual(false)
    expect(isMobilePhone('899911122б33')).toEqual(false)
    expect(isMobilePhone('89991112Б233')).toEqual(false)
    expect(isMobilePhone('8.9991112233')).toEqual(false)
    expect(isMobilePhone('8,9991112233')).toEqual(false)
    expect(isMobilePhone(8.9991112233)).toEqual(false)
    expect(isMobilePhone('')).toEqual(false)
    expect(isMobilePhone('9991112233')).toEqual(false)
    expect(isMobilePhone(9991112233)).toEqual(false)
    expect(isMobilePhone()).toEqual(false)
    expect(isMobilePhone([])).toEqual(false)
    expect(isMobilePhone('test')).toEqual(false)
    expect(isMobilePhone({})).toEqual(false)
    expect(isMobilePhone(() => {})).toEqual(false)
  })
})