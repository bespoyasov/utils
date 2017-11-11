import expect from 'expect'
import getFileType from './getFileType'

describe('getFileType', () => {
  it('should return a string', () => {
    expect(typeof getFileType()).toEqual('string')
  })

  it('should return right MIME-type for extention', () => {
    const cases = {
      'png':  'image/png',
      'jpg':  'image/jpeg',
      'jpeg': 'image/jpeg',
      'rtf':  'application/rtf',
      'txt':  'text/plain',
      'pdf':  'application/pdf',
      'doc':  'application/msword',
      'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'xls':  'application/vnd.ms-excel',
      'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'rar':  'application/x-rar-compressed, application/octet-stream',
      'zip':  'application/zip, application/octet-stream'
    }

    Object.keys(cases).forEach(testCase => {
      expect(getFileType(testCase)).toEqual(cases[testCase])
    })
  })

  it('should return .smth', () => {
    expect(getFileType('smth')).toEqual('.smth')
  })

  it('should return empty string', () => {
    const cases = [undefined, '', [], {}, () => {}]
    
    cases.forEach((testCase, i) => {
      expect(getFileType(testCase)).toEqual('')
    })
  })
})