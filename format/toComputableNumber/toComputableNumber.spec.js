import expect from 'expect'
import toComputableNumber from './toComputableNumber'

describe('toComputableNumber', () => {
  it('should return a number', () => {
    expect(typeof toComputableNumber('')).toEqual('number')
  })

  it('should return same number as number', () => {
    const cases = ['0', '42', '-0', '-42']
    const results = [0, 42, -0, -42]
    
    cases.forEach((testCase, i) => {
      expect(toComputableNumber(testCase)).toEqual(results[i])
    })
  })

  it('should return same number as number with decimal point', () => {
    const cases = ['0,0', '0,1', '4,1', '4,', '-0,0', '-0,1', '-4,1', '-4,']
    const results = [0.0, 0.1, 4.1, 4., -0.0, -0.1, -4.1, -4.]
    
    cases.forEach((testCase, i) => {
      expect(toComputableNumber(testCase)).toEqual(results[i])
    })
  })

  it('should return 0', () => {
    const result = 0
    const cases = [
      '0,0,0',
      '0,,',
      'test',
      '4.2.',
      '4,2,',
      '4,2.3',
      '4,2,3',
      '.42.',
      undefined,
      null,
      [],
      {}
    ]
    
    cases.forEach((testCase, i) => {
      expect(toComputableNumber(testCase)).toEqual(result)
    })
  })
})