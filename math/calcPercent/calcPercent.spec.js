import expect from 'expect'
import calcPercent from './calcPercent'

describe('calcPercent', () => {
  it('should return a number', () => {
    expect(typeof calcPercent(1, 1)).toEqual('number')
  })

  it('should return 50', () => {
    expect(calcPercent(1, 2)).toEqual(50)
  })

  it('should return 33', () => {
    expect(calcPercent(1, 3)).toEqual(33)
  })
  
  it('should return 17', () => {
    expect(calcPercent(1, 6)).toEqual(17)
  })

  it('should return 25', () => {
    expect(calcPercent(2, 8)).toEqual(25)
  })

  it('should return 20', () => {
    expect(calcPercent(2, 10)).toEqual(20)
  })

  it('should return 10', () => {
    expect(calcPercent(1, 10)).toEqual(10)
  })

  it('should return 0', () => {
    expect(calcPercent(5, 'test')).toEqual(0)
    expect(calcPercent(5, null)).toEqual(0)
    expect(calcPercent(5, {})).toEqual(0)

    expect(calcPercent(undefined)).toEqual(0)
    expect(calcPercent(null)).toEqual(0)
    expect(calcPercent({})).toEqual(0)
    expect(calcPercent([])).toEqual(0)
    expect(calcPercent(5)).toEqual(0)
    expect(calcPercent()).toEqual(0)
  })
})