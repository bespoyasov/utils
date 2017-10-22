import expect from 'expect'
import trimNumber from './trimNumber'

describe('trimNumber', () => {
  it('should return a number', () => {
    expect(typeof trimNumber()).toEqual('number')
  })

  it('should return the same number', () => {
    const cases = [0, 42, -42, 4.2, 0.42, .42]
    
    cases.forEach((testCase, i) => {
      expect(trimNumber(testCase)).toEqual(testCase)
    })
  })

  it('should return trimmed number', () => {
    const cases = [42.001, 42.009, 42.119]
    const results = [42.00, 42.00, 42.11]
    
    cases.forEach((testCase, i) => {
      expect(trimNumber(testCase)).toEqual(results[i])
    })
  })

  it('should return 0', () => {
    const result = 0
    const cases = [undefined, '', [], {}, () => {}]
    
    cases.forEach((testCase, i) => {
      expect(trimNumber(testCase)).toEqual(result)
    })
  })
})