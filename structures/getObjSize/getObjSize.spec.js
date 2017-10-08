import expect from 'expect'
import getObjSize from './getObjSize'

describe('getObjSize', () => {
  it('should return a number', () => {
    expect(typeof getObjSize({})).toEqual('number')
  })

  it('should return 1', () => {
    expect(getObjSize({test: 'test'})).toEqual(1)
  })

  it('should return 5', () => {
    expect(getObjSize({'1': 1, '2': 2, '3': 3, '4': 4, '5': 5})).toEqual(5)
  })

  it('should return 0', () => {
    expect(getObjSize(undefined)).toEqual(0)
    expect(getObjSize(null)).toEqual(0)
    expect(getObjSize({})).toEqual(0)
    expect(getObjSize([])).toEqual(0)
    expect(getObjSize(5)).toEqual(0)
    expect(getObjSize()).toEqual(0)
  })
})