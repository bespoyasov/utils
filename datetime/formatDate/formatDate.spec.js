import expect from 'expect'
import formatDate from './formatDate'

describe('formatDate', () => {
  const ts = (new Date(2017, 11, 1)).getTime()

  it('should return a string', () => {
    expect(typeof formatDate()).toEqual('string')
  })

  it('should return 1 dec 2017', () => {
    expect(formatDate(ts)).toEqual('1 dec 2017')
  })

  it('should return 01 dec 2017', () => {
    expect(formatDate(ts, {padStart: true})).toEqual('01 dec 2017')
  })

  it('should return 01 01 2017', () => {
    const ts = (new Date(2017, 0, 1)).getTime()
    const options = {
      padStart: true,
      months: [1,2,3,4,5,6,7,8,9,10,11,12]
    }

    expect(formatDate(ts, options)).toEqual('01 01 2017')
  })
  
  it('should return empty string', () => {
    const cases = [
      undefined,
      'test',
      null,
      Math,
      [],
      {}
    ]

    cases.forEach(testCase => {
      expect(formatDate(testCase)).toEqual('')
    })
  })
})