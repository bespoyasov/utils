import expect from 'expect'
import xor from './xor'


describe('xor', () => {
  it('should return a boolean', () => {
    expect(typeof xor(true, true)).toEqual('boolean')
  })

  it('should return true', () => {
    const cases = [
      [true, false],
      [false, true]
    ]
    
    cases.forEach((testCase, i) => {
      expect(xor(...testCase)).toEqual(true)
    })
  })

  it('should return false', () => {
    const cases = [
      [true, true],
      [false, false]
    ]
    
    cases.forEach((testCase, i) => {
      expect(xor(...testCase)).toEqual(false)
    })
  })
})