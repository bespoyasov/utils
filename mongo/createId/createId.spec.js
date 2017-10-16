import expect from 'expect'
import createId from './createId'

describe('createId', () => {
  it('should return a string', () => {
    expect(typeof createId()).toEqual('string')
  })

  it('should return a string 24 char long', () => {
    expect(createId().length).toEqual(24)
  })

  it('should contain only numbers and hex symbols', () => {
    const result = createId().replace(/\d*a*b*c*d*e*f*/g, '').length
    expect(result).toEqual(0)
  })
})