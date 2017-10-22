import expect from 'expect'
import toReadableNumber from './toReadableNumber'

describe('toReadableNumber', () => {
  it('should return a string', () => {
    expect(typeof toReadableNumber(42)).toEqual('string')
  })

  it('should return same number as string', () => {
    const cases = [0, 42, -42]
    const results = ['0', '42', '-42']
    
    cases.forEach((testCase, i) => {
      expect(toReadableNumber(testCase)).toEqual(results[i])
    })
  })

  it('should return number as string with coma instead of point', () => {
    const cases = [0.2, 4.2, -4.2]
    const results = ['0,2', '4,2', '-4,2']
    
    cases.forEach((testCase, i) => {
      expect(toReadableNumber(testCase)).toEqual(results[i])
    })
  })

  it('should return empty string', () => {
    const result = 0
    const cases = [0, undefined, null, [], {}, 'test']
    
    cases.forEach((testCase, i) => {
      expect(toReadableNumber(testCase)).toEqual(result)
    })
  })
})