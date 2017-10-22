import expect from 'expect'
import roundDecimal from './roundDecimal'

describe('roundDecimal', () => {
  it('should return a number', () => {
    expect(typeof roundDecimal()).toEqual('number')
  })


  it('should return the same number', () => {
    const cases = [42, 0, 4.2, 0.42, .42]

    cases.forEach(testCase => {
      expect(roundDecimal(testCase)).toEqual(testCase)
    })
  })

  it('should return rounded number', () => {
    const cases = [42.001, 42.009, 42.119]
    const results = [42.00, 42.01, 42.12]
    
    cases.forEach((testCase, i) => {
      expect(roundDecimal(testCase)).toEqual(results[i])
    })
  })

  it('should return 0', () => {
    const result = 0
    const cases = [undefined, '', [], {}, () => {}]
    
    cases.forEach(testCase => {
      expect(roundDecimal(testCase)).toEqual(result)
    })
  })
})