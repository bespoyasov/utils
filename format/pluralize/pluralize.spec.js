import expect from 'expect'
import pluralize from './pluralize'

describe('pluralize', () => {
  const words = ['рубль', 'рубля', 'рублей']
  const cases = [0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 15, 20, 100]
  const resultsIndexes = [2, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2]
  const failCases = [null, undefined, [], {}, '', 'test', Math]

  it('should return a function', () => {
    expect(typeof pluralize()).toEqual('function')
  })

  it('should return right word form', () => {
    cases.forEach((testCase, i) => {
      expect(pluralize(...words)(testCase)).toEqual(words[resultsIndexes[i]])
    })
  })

  it('should return emprt string', () => {
    failCases.forEach((testCase, i) => {
      expect(pluralize(...words)(testCase)).toEqual('')
    })
  })
})