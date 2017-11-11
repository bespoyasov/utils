import expect from 'expect'
import isiOS from './isiOS'

describe('isiOS', () => {
  global.navigator = {}

  it('should return boolean', () => {
    expect(typeof isiOS()).toEqual('boolean')
  })

  it('should return false', () => {
    expect(isiOS()).toEqual(false)
  })

  it('should return true', () => {
    global.navigator.platform = 'iPhone'
    expect(isiOS()).toEqual(true)
  })
})