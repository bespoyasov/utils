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
    expect(composeId(undefined)).toEqual(null)
    expect(composeId('test')).toEqual(null)
    expect(composeId(null)).toEqual(null)
    expect(composeId(Math)).toEqual(null)
    expect(composeId({})).toEqual(null)
    expect(composeId('')).toEqual(null)
    expect(composeId(5)).toEqual(null)
  })
})