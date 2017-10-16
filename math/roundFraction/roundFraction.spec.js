import expect from 'expect'
import roundFraction from './roundFraction'

describe('roundFraction', () => {
  it('should return a number', () => {
    expect(typeof roundFraction(1)).toEqual('number')
  })

  it('should return 5.55', () => {
    expect(roundFraction(5.5478)).toEqual(5.55)
    expect(roundFraction(5.547)).toEqual(5.55)
    expect(roundFraction(5.552)).toEqual(5.55)
  })

  it('should return 5.5', () => {
    expect(roundFraction(5.5478, {precision: 1})).toEqual(5.5)
    expect(roundFraction(5.547, {precision: 1})).toEqual(5.5)
    expect(roundFraction(5.502, {precision: 1})).toEqual(5.5)
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
    expect(roundFraction(5, 'test')).toEqual(0)
    expect(roundFraction(5, null)).toEqual(0)
    expect(roundFraction(undefined)).toEqual(0)
    expect(roundFraction(null)).toEqual(0)
    expect(roundFraction({})).toEqual(0)
    expect(roundFraction([])).toEqual(0)
    expect(roundFraction()).toEqual(0)
  })
})