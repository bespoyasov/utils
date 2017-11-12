import expect from 'expect'
import repeat from './repeat'

describe('repeat', () => {
  it('should return a string', () => {
    expect(typeof repeat()).toEqual('string')
  })

  it('should return the same string', () => {
    const cases = [
      ['', 1],
      ['1', 1],
      ['10', 1],
      ['test', 1],
    ]

    cases.forEach(testCase => {
      const [a, b] = testCase
      expect(repeat(a, b)).toEqual(a)
    })
  })

  it('should return string repeated twice', () => {
    const cases = [
      ['', 2],
      ['1', 2],
      ['10', 2],
      ['test', 2],
    ]

    cases.forEach(testCase => {
      const [a, b] = testCase
      expect(repeat(a, b)).toEqual(a + a)
    })
  })

  it('should return empty string', () => {
    const cases = [
      ['', 0],
      ['1', 0],
      ['10', 0],
      ['test', 0],

      [undefined, undefined],
      [1, 1],
      [[], 1],
      [{}, 1],
      [null, 1]
    ]

    cases.forEach(testCase => {
      const [a, b] = testCase
      expect(repeat(a, b)).toEqual('')
    })
  })
})