import expect from 'expect'
import getTodayStartTime from './getTodayStartTime'

describe('getTodayStartTime', () => {
  it('should return a number', () => {
    expect(typeof getTodayStartTime()).toEqual('number')
  })
})