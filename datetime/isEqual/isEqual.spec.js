import expect from 'expect'
import isEqual from './isEqual'

describe('isEqual', () => {
  const ts1 = (new Date(2017, 11, 31, 12, 0, 0, 0)).getTime()
  const ts2 = (new Date(2017, 11, 30, 12, 0, 0, 0)).getTime()
  const ts3 = (new Date(2017, 11, 29, 11, 0, 0, 0)).getTime()

  it('should return a boolean', () => {
    expect(typeof isEqual()).toEqual('boolean')
  })

  it('should return true', () => {
    const cases = [
      [ts1, ts1, {by: 'date'}],
      [ts1, ts1, {by: 'time'}],
      [ts1, ts1, {by: 'stamp'}],
      [ts1, ts1, {by: 'datetime'}],
      [ts1, ts2, {by: 'time'}]
    ]

    cases.forEach(testCase => {
      const [a, b, c] = testCase
      expect(isEqual(a, b, c)).toEqual(true)
    })
  })

  it('should return false', () => {
    const cases = [
      [ts1, ts2, {by: 'date'}],
      [ts1, ts3, {by: 'time'}],
      [ts1, ts2, {by: 'stamp'}],
      [ts1, ts2, {by: 'datetime'}],
      [ts1, ts3, {by: 'time'}]
    ]

    cases.forEach(testCase => {
      const [a, b, c] = testCase
      expect(isEqual(a, b, c)).toEqual(false)
    })
  })

  
  it('should return false', () => {
    const cases = [
      [undefined, undefined],
      ['test', undefined],
      [null, 'test'],
      [Math, 10],
      [[], []],
      [{}, {}]
    ]

    cases.forEach(testCase => {
      const [a, b] = testCase
      expect(isEqual(a, b)).toEqual(false)
    })
  })
})