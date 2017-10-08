import expect from 'expect'
import jsdom from 'mocha-jsdom'
import setItem from './setItem'

describe('setItem', () => {

  it('should return null', () => {
    expect(setItem('test', 'test')).toEqual(null)
  })

  jsdom()

  it('should return null', () => {
    // expect(setItem('test', 'test')).toEqual(null)
  })
})