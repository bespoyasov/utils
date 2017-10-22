import expect from 'expect'
import isEmail from './isEmail'

describe('isEmail', () => {
  it('should return a boolean', () => {
    expect(typeof isEmail('test')).toEqual('boolean')
  })

  it('should return true', () => {
    expect(isEmail('test@gmail.com')).toEqual(true)
    expect(isEmail('test@me.com')).toEqual(true)
    expect(isEmail('t@gmail.com')).toEqual(true)
    expect(isEmail('test@g.io')).toEqual(true)
    expect(isEmail('t@g.z')).toEqual(true)
  })

  it('should return false', () => {
    expect(isEmail('@gmail.com')).toEqual(false)
    expect(isEmail('test@gmail.')).toEqual(false)
    expect(isEmail('test@gmailcom')).toEqual(false)
    expect(isEmail('testgmail.com')).toEqual(false)
    expect(isEmail('test.gmail@com')).toEqual(false)
    expect(isEmail('')).toEqual(false)
    expect(isEmail(42)).toEqual(false)
    expect(isEmail()).toEqual(false)
    expect(isEmail([])).toEqual(false)
    expect(isEmail({})).toEqual(false)
    expect(isEmail(() => {})).toEqual(false)
  })
})