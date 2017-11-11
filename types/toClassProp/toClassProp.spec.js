import expect from 'expect'
import toClassProp from './toClassProp'

describe('toClassProp', () => {
  it('should return a string', () => {
    expect(typeof toClassProp()).toEqual('string')
  })

  it('should return "string"', () => {
    const cases = [
      '',
      'string',
      new String()
    ]

    cases.forEach((testCase) => {
      expect(toClassProp(testCase)).toEqual('string')
    })
  })

  it('should return "number"', () => {
    const cases = [
      42,
      .42,
      -42,
      new Number(),
      Infinity,
      NaN
    ]

    cases.forEach((testCase) => {
      expect(toClassProp(testCase)).toEqual('number')
    })
  })

  it('should return "object"', () => {
    const cases = [
      {},
      {a: 42},
      new Object()
    ]

    cases.forEach((testCase) => {
      expect(toClassProp(testCase)).toEqual('object')
    })
  })

  it('should return "array"', () => {
    const cases = [
      [],
      [42],
      new Array()
    ]

    cases.forEach((testCase) => {
      expect(toClassProp(testCase)).toEqual('array')
    })
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