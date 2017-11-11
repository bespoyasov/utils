import expect from 'expect'
import getCurrentYear from './getCurrentYear'

describe('getCurrentYear', () => {
  it('should return a number', () => {
    expect(typeof getCurrentYear()).toEqual('number')
  })

  it('should return current year', () => {
    const year = (new Date).getFullYear()
    expect(getCurrentYear()).toEqual(year)
  })
})