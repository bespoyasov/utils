import expect from 'expect'
import toClassProp from './toClassProp'

describe('toClassProp', () => {
  it('should return a string', () => {
    expect(typeof toClassProp()).toEqual('string')
  })

  it('should return "string"', () => {
    expect(toClassProp('')).toEqual('string')
    expect(toClassProp('string')).toEqual('string')
    expect(toClassProp(new String())).toEqual('string')
  })

  it('should return "number"', () => {
    expect(toClassProp(42)).toEqual('number')
    expect(toClassProp(.42)).toEqual('number')
    expect(toClassProp(-42)).toEqual('number')
    expect(toClassProp(new Number())).toEqual('number')
    expect(toClassProp(Infinity)).toEqual('number')
    expect(toClassProp(NaN)).toEqual('number')
  })

  it('should return "object"', () => {
    expect(toClassProp({})).toEqual('object')
    expect(toClassProp({a: 42})).toEqual('object')
    expect(toClassProp(new Object())).toEqual('object')
  })

  it('should return "array"', () => {
    expect(toClassProp([])).toEqual('array')
    expect(toClassProp([42])).toEqual('array')
    expect(toClassProp(new Array())).toEqual('array')
  })

  it('should return "error"', () => {
    expect(toClassProp(new ReferenceError())).toEqual('error')
  })

  it('should return "date"', () => {
    expect(toClassProp(new Date())).toEqual('date')
  })

  it('should return "boolean"', () => {
    expect(toClassProp(new Boolean())).toEqual('boolean')
  })

  it('should return "regexp"', () => {
    expect(toClassProp(/a-z/)).toEqual('regexp')
  })

  it('should return "json"', () => {
    expect(toClassProp(JSON)).toEqual('json')
  })
})