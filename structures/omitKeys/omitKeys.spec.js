import expect from 'expect'
import omitKeys from './omitKeys'

const user = { 
  id: 42, 
  userName: 'VasyaSuperStar42',
  fullName: 'Vasiliy Pupkin'
}

const keys = ['id', 'fullName']
const result = { userName: 'VasyaSuperStar42' }


describe('omitKeys', () => {
  it('should return empty object, if first argument is not an object', () => {
    const cases = [
      undefined,
      null,
      [],
      '',
      42,
    ]

    cases.forEach((testCase) => {
      expect(omitKeys(testCase)).toEqual({})
    })
  })

  it('should return same object, if not keys not given', () => {
    expect(omitKeys(user)).toEqual(user)
  })

  it('should return copy of object without specified keys', () => {
    expect(omitKeys(user, keys)).toEqual(result)
  })
})