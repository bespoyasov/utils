import localStorage from 'mock-local-storage'
import expect from 'expect'
import clear from './clear'


describe('clear', () => {
  it('should clear localStorage', () => {
    global.window = {}
    window.localStorage = global.localStorage
    window.localStorage.setItem('test', JSON.stringify('test'))
    
    clear()
    expect(window.localStorage.length).toEqual(0)
  })
})