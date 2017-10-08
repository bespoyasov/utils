import expect from 'expect'
import getUTCTime from './getUTCTime'

describe('getUTCTime', () => {
  it('should return a number', () => {
    expect(typeof getUTCTime()).toEqual('number')
  })
})