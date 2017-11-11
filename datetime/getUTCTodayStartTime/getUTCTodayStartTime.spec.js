import expect from 'expect'
import getUTCTodayStartTime from './getUTCTodayStartTime'

describe('getUTCTodayStartTime', () => {
  it('should return a number', () => {
    expect(typeof getUTCTodayStartTime()).toEqual('number')
  })
})