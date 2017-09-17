import isString from '../types/isString'

/**
 * Returns first non space character of given string
 * @param {String} str
 * @return {String}
 */
const getFirstNonSpaceChar = str => 
  !!str 
  && isString(str) 
  && str.replace(/\s/g, '').charAt(0) 
  || ''

export default getFirstNonSpaceChar