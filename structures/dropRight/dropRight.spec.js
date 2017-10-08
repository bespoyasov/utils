import expect from 'expect'
import dropRight from './dropRight'

describe('dropRight', () => {
  it('should be curried', () => {
    expect(typeof dropRight()).toEqual('function')
    expect(typeof dropRight()()).toEqual('object')
  })

  it('should return empty array', () => {
    expect(dropRight()().length).toEqual(0)
    expect(dropRight([])().length).toEqual(0)
    expect(dropRight()(1).length).toEqual(0)
    expect(dropRight([])(1).length).toEqual(0)
    expect(dropRight([1])(1).length).toEqual(0)
  })

  it('should return array of 1 element', () => {
    expect(dropRight([1])(0).length).toEqual(1)
    expect(dropRight([1,2])(1).length).toEqual(1)
    expect(dropRight([1,2,3])(2).length).toEqual(1)
  })

  it('should return empty array', () => {
    expect(dropRight(undefined)().length).toEqual(0)
    expect(dropRight('test')().length).toEqual(0)
    expect(dropRight(null)().length).toEqual(0)
    expect(dropRight(42)().length).toEqual(0)
    expect(dropRight({})().length).toEqual(0)
  })
})