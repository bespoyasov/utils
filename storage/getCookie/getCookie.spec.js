import expect from 'expect'
import getCookie from './getCookie'

const mock = {
  _value: '', 
  get cookie() { return this._value },
  set cookie(val) { this._value += val + ';' }
}


describe('getCookie', () => {

  it('should return null', () => {
    expect(getCookie('test')).toEqual(null)
  })

  it('should get value from localStorage', () => {
    global.document = {}
    document.cookie = mock
    document.cookie = 'test_string=test'

    expect(getCookie('test_string')).toEqual('test')
  })
})