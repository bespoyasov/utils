import expect from 'expect'
import formatTime from './formatTime'

describe('formatTime', () => {
  it('should return a string', () => {
    expect(typeof formatTime()).toEqual('string')
  })

  it('should return 01:01', () => {
    const ts = (new Date(2017, 11, 1, 1, 1, 0, 0)).getTime()
    expect(formatTime(ts)).toEqual('01:01')
  })

  it('should return 12:01', () => {
    const ts = (new Date(2017, 11, 1, 12, 1, 0, 0)).getTime()
    expect(formatTime(ts)).toEqual('12:01')
  })

  it('should return 01:11', () => {
    const ts = (new Date(2017, 11, 1, 1, 11, 0, 0)).getTime()
    expect(formatTime(ts)).toEqual('01:11')
  })

  it('should return 11:11', () => {
    const ts = (new Date(2017, 11, 1, 11, 11, 0, 0)).getTime()
    expect(formatTime(ts)).toEqual('11:11')
  })

  it('should return 11:11:00', () => {
    const ts = (new Date(2017, 11, 1, 11, 11, 0, 0)).getTime()
    expect(formatTime(ts, {seconds:true})).toEqual('11:11:00')
  })

  it('should return 11:11:01', () => {
    const ts = (new Date(2017, 11, 1, 11, 11, 1, 0)).getTime()
    expect(formatTime(ts, {seconds:true})).toEqual('11:11:01')
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
      expect(formatTime(testCase)).toEqual('')
    })
  })
})