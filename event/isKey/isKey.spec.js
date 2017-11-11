import expect from 'expect'
import isKey from './isKey'

describe('isKey', () => {
  const keyCodes = {
    'arrow-down': 40,
    'arrow-right': 39,
    'arrow-up': 38,
    'arrow-left': 37,
    'backspace': 8,
    'escape': 27,
    'enter': 13,
    'tab': 9,
    'shift': 16,
    'ctrl': 17,
    'alt': 18,
  }

  it('should be curriable', () => {
    expect(typeof isKey()).toEqual('function')
    expect(typeof isKey()()).toEqual('boolean')
  })

  it('should return true', () => {
    Object.keys(keyCodes).forEach(testCase => {
      const eventMock = { keyCode: keyCodes[testCase] }
      expect(isKey(testCase)(eventMock)).toEqual(true)
    })
  })

  it('should return true (with config)', () => {
    Object.keys(keyCodes).forEach(testCase => {
      const eventMock = { 
        keyCode: keyCodes[testCase],
        shiftKey: true
      }
      expect(isKey(testCase, {withShift: true})(eventMock)).toEqual(true)
    })
  })

  it('should return false', () => {
    Object.keys(keyCodes).forEach(testCase => {
      const eventMock = { keyCode: keyCodes[testCase] }
      expect(isKey('test')(eventMock)).toEqual(false)
      expect(isKey(testCase, {withShift: true})(eventMock)).toEqual(false)
    })
  })
})