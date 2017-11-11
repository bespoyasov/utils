import expect from 'expect'
import idToString from './idToString'

const testId1 = {
  _id: { $id: '59e49417e7d34b32e73f6883' }
}

const testId2 = { $id: '59e49417e7d34b32e73f6883' }


describe('idToString', () => {
  it('should return a string', () => {
    expect(typeof idToString(testId1)).toEqual('string')
    expect(typeof idToString(testId2)).toEqual('string')
  })

  it('should return a string 24 char long', () => {
    expect(idToString(testId1).length).toEqual(24)
    expect(idToString(testId2).length).toEqual(24)
  })

  it('should contain only numbers and hex symbols', () => {
    const result = idToString(testId2).replace(/\d*a*b*c*d*e*f*/g, '').length
    expect(result).toEqual(0)
  })

  it('should return empty string', () => {
    const cases = [
      undefined,
      null,
      Math,
      {},
      '',
      5
    ]

    cases.forEach((testCase) => {
      expect(idToString(testCase)).toEqual('')
    })
  })
})