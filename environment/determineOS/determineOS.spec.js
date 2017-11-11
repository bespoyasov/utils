import expect from 'expect'
import determineOS from './determineOS'

describe('determineOS', () => {
  const clearGlobal = () => {
    global.navigator = {
      userAgent: '',
      appVersion: '',
      platform: '',
    }
  }

  it('should return string', () => {
    clearGlobal()
    expect(typeof determineOS()).toEqual('string')
  })

  it('should return "is-anroid"', () => {
    clearGlobal()
    global.navigator.userAgent = 'android'
    expect(determineOS()).toEqual('is-android')
  })

  it('should return "is-ios"', () => {
    clearGlobal()
    global.navigator.platform = 'iPhone'
    expect(determineOS()).toEqual('is-ios')
  })

  it('should return "is-windows"', () => {
    clearGlobal()
    global.navigator.appVersion = 'win'
    expect(determineOS()).toEqual('is-windows')
  })

  it('should return "is-mac"', () => {
    clearGlobal()
    global.navigator.appVersion = 'mac'
    expect(determineOS()).toEqual('is-mac')
  })

  it('should return "is-unix"', () => {
    clearGlobal()
    global.navigator.appVersion = 'x11'
    expect(determineOS()).toEqual('is-unix')
  })

  it('should return "is-linux"', () => {
    clearGlobal()
    global.navigator.appVersion = 'linux'
    expect(determineOS()).toEqual('is-linux')
  })

  it('should return "is-unknown-os"', () => {
    clearGlobal()
    expect(determineOS()).toEqual('is-unknown-os')
  })
})