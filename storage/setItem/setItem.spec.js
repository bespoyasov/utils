import localStorage from 'mock-local-storage'

import expect from 'expect'
import setItem from './setItem'


describe('setItem', () => {
  it('should return null', () => {
    global.window = undefined
    expect(setItem('test', 'test')).toEqual(null)
  })

  it('should save value to localStorage', () => {
    global.window = {}
    window.localStorage = global.localStorage

    setItem('test', 'test')
    expect(JSON.parse(window.localStorage.getItem('test'))).toEqual('test')
  })
})