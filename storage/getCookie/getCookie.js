/**
 * Returns the value stored in cookie for given key
 * @param {String} key
 * @returns {String} 
 */
const getCookie = key => {
  if ('undefined' === typeof document) return null
  const value = '; ' + (document.cookie || '')
  const parts = value.split('; ' + key + '=')
  return parts.length == 2 
    ? parts.pop().split(';').shift() 
    : ''
}

export default getCookie