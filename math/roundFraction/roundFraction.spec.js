import expect from 'expect'
import roundFraction from './roundFraction'

describe('roundFraction', () => {
  it('should return a number', () => {
    expect(typeof roundFraction(1)).toEqual('number')
  })

  it('should return 5.55', () => {
    const cases = [
      5.5478,
      5.547,
      5.552
    ]

    cases.forEach((testCase) => {
      expect(roundFraction(testCase)).toEqual(5.55)
    })
  })

  it('should return 5.5', () => {
    const cases = [
      5.5478,
      5.547,
      5.502
    ]

    cases.forEach((testCase) => {
      expect(roundFraction(testCase, {precision: 1})).toEqual(5.5)
    })
  })

  it('should return 5.50', () => {
    expect(roundFraction(5.5, {precision: 2})).toEqual(5.50)
  })

  it('should return 5', () => {
    expect(roundFraction(5, {precision: 2})).toEqual(5)
    expect(roundFraction(5, {precision: 1})).toEqual(5)
    expect(roundFraction(5, {precision: -1})).toEqual(5)
    expect(roundFraction(5)).toEqual(5)
  })

  it('should return 0', () => {
    const cases = [
      [5, 'test'],
      [5, null],
      [undefined],
      [null],
      [{}],
      [[]]
    ]

    cases.forEach((testCase) => {
      expect(roundFraction(...testCase)).toEqual(0)
    })
  })
})