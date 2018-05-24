import expect from 'expect'
import copyKeys from './copyKeys'

const testObject = { 
  id: 42, 
  userName: 'VasyaSuperStar42',
  fullName: { 
    firstName: 'Vasiliy',
    lastName: 'Pupkin'
  }
}

const keys = ['id', 'fullName']
const {userName, ...result} = testObject


describe('copyKeys', () => {
  it('should return empty object, if first argument is not an object', () => {
    const cases = [
      undefined,
      null,
      [],
      '',
      42,
    ]

    cases.forEach((testCase) => {
      expect(copyKeys(testCase)).toEqual({})
    })
  })

  it('should return same object, if keys are not array or empty array', () => {
    const cases = [
      undefined,
      null,
      {},
      [],
      '',
      42,
    ]

    cases.forEach((testCase) => {
      expect(copyKeys(testObject, testCase)).toEqual({})
    })
  })

  it('should return copy of object only with specified keys', () => {
    expect(copyKeys(testObject, keys)).toEqual(result)
  })
})