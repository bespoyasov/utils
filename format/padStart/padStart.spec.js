import expect from 'expect'
import padStart from './padStart'

describe('padStart', () => {
  it('should return a string', () => {
    expect(typeof padStart()).toEqual('string')
  })

  it('should return the same string', () => {
    const cases = [
      ['1', 0, ' '],
      ['10', 0, ' '],
      ['100', 1, ' '],
      ['100', 2, ' '],
      ['1', 10, ''],
      ['1', 10],
      ['1']
    ]

    cases.forEach(testCase => {
      const [a, b, c] = testCase
      expect(padStart(a, b, c)).toEqual(a)
    })
  })

  it('should return string padded from left', () => {
    const cases = [
      ['1', 2, '0', '01'],
      ['1', 3, '0', '001'],
      ['123', 5, '0', '00123']
    ]

    cases.forEach(testCase => {
      const [a, b, c, d] = testCase
      expect(padStart(a, b, c)).toEqual(d)
    })
  })

  it('should return empty string', () => {
    const cases = [
      undefined,
      1000,
      null,
      Math,
      [],
      {}
    ]

    cases.forEach(testCase => {
      expect(padStart(testCase)).toEqual('')
    })
  })
})