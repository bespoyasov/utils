import expect from 'expect'
import composeId from './composeId'

const testString = '59e49417e7d34b32e73f6883'


describe('composeId', () => {
  it('should return an object', () => {
    expect(typeof composeId(testString)).toEqual('object')
  })

  it('should return an object with $id field with string-value 24 char long', () => {
    expect(composeId(testString)['$id'].length).toEqual(24)
  })

  it('should contain only 1 field', () => {
    expect(Object.keys(composeId(testString)).length).toEqual(1)
  })

  it('should return null', () => {
    const cases = [
      undefined,
      'test',
      null,
      Math,
      {},
      '',
      5
    ]

    cases.forEach((testCase) => {
      expect(composeId(testCase)).toEqual(null)
    })
  })
})