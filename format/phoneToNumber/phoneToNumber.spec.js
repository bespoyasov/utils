import expect from 'expect'
import phoneToNumber from './phoneToNumber'

describe('phoneToNumber', () => {
  it('should return a number', () => {
    expect(typeof phoneToNumber()).toEqual('number')
  })


  it('should return 79991112233', () => {
    const result = 79991112233
    const cases = [
      '79991112233',
      '+79991112233',
      '+7 (999) 1112233',
      '+7 (999) 111 22 33',
      '+7 (999) 111-22-33',
    ]

    cases.forEach(testCase => {
      expect(phoneToNumber(testCase)).toEqual(result)
    })
  })


  it('should return 0', () => {
    const result = 0
    const cases = [
      undefined,
      null,
      {},
      []
    ]

    cases.forEach(testCase => {
      expect(phoneToNumber(testCase)).toEqual(result)
    })
  })
})