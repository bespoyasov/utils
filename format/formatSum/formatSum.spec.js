import expect from 'expect'
import formatSum from './formatSum'

const THINSP = ' '

describe('formatSum', () => {
  it('should return a string', () => {
    expect(typeof formatSum()).toEqual('string')
  })

  it('should return the same number as string', () => {
    const cases = [100, 500, 10, 1, 1000, 10.1]
    const results = ['100', '500', '10', '1', '1000', '10,1']
    cases.forEach((testCase, i) => {
      expect(formatSum(testCase)).toEqual(results[i])
    })
  })

  it('should return the formatted number', () => {
    const cases = [10000, 10000.1]
    const results = [`10${THINSP}000`, `10${THINSP}000,1`]
    cases.forEach((testCase, i) => {
      expect(formatSum(testCase)).toEqual(results[i])
    })
  })

  it('should return the formatted number with dot as point', () => {
    const cases = [10000, 10000.1]
    const results = [`10${THINSP}000`, `10${THINSP}000.1`]
    cases.forEach((testCase, i) => {
      expect(formatSum(testCase, {pointChar: '.'})).toEqual(results[i])
    })
  })

  it('should return the formatted number by given options', () => {
    const cases = [100, 1000, 10000]
    const results = ['100', `1${THINSP}000`, `10${THINSP}000`]
    cases.forEach((testCase, i) => {
      expect(formatSum(testCase, {biggerThan: 100})).toEqual(results[i])
    })
  })
})