import isString from '../../types/isString'

/**
 * Returns mime type of given file extention or unknown extention with dot before
 * @param {String} ext
 * @returns {String} 
 */
const getFileType = ext => {
  if (!ext || !isString(ext)) return ''
  switch(ext) {
    case 'png':  return 'image/png'
    case 'jpg':
    case 'jpeg': return 'image/jpeg'
    case 'rtf':  return 'application/rtf'
    case 'txt':  return 'text/plain'
    case 'pdf':  return 'application/pdf'
    case 'doc':  return 'application/msword'
    case 'docx': return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    case 'xls':  return 'application/vnd.ms-excel'
    case 'xlsx': return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    case 'rar':  return 'application/x-rar-compressed, application/octet-stream'
    case 'zip':  return 'application/zip, application/octet-stream'
    default:     return '.' + ext
  }
}

export default getFileType