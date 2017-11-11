import expect from 'expect'
import isAndroid from './isAndroid'

describe('isAndroid', () => {
  global.navigator = {
    userAgent: ''
  }

  it('should return boolean', () => {
    expect(typeof isAndroid()).toEqual('boolean')
  })

  it('should return false', () => {
    expect(isAndroid()).toEqual(false)
  })

  it('should return true', () => {
    global.navigator.userAgent = 'android'
    expect(isAndroid()).toEqual(true)
  })
})