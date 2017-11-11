import expect from 'expect'
import isMobilePhone from './isMobilePhone'

describe('isMobilePhone', () => {
  it('should return a boolean', () => {
    expect(typeof isMobilePhone('test')).toEqual('boolean')
  })

  it('should return true', () => {
    const cases = [
      '89991112233',
      '+79991112233',
      '+7 999 1112233',
      '+7 999 111 22 33',
      '+7 (999) 1112233',
      '+7 (999) 111-22-33',
      '+7 (999) 111 22 33',
      89991112233,
      79991112233
    ]

    cases.forEach((testCase) => {
      expect(isMobilePhone(testCase)).toEqual(true)
    })
  })

  it('should return false', () => {
    const cases = [
      '89991112233z',
      '8999111223Z3',
      '899911122б33',
      '89991112Б233',
      '8.9991112233',
      '8,9991112233',
      8.9991112233,
      '9991112233',
      9991112233,
      undefined,
      'test',
      '',
      [],
      {},
      () => {}
    ]

    cases.forEach((testCase) => {
      expect(isMobilePhone(testCase)).toEqual(false)
    })
  })
})