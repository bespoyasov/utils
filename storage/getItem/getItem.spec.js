import localStorage from 'mock-local-storage'

import expect from 'expect'
import getItem from './getItem'


describe('getItem', () => {
  it('should return null', () => {
    global.window = undefined
    expect(getItem('test')).toEqual(null)
  })

  it('should get value from localStorage', () => {
    global.window = {}
    window.localStorage = global.localStorage
    window.localStorage.setItem('test', JSON.stringify('test'))

    expect(getItem('test')).toEqual('test')
  })
})