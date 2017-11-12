import isString from '../../types/isString'
import isNumber from '../../types/isNumber'

/**
 * Returns padded left string with given char
 * @param {String} str 
 * @param {Number} length 
 * @param {String} char 
 * @return {String}
 */
const padStart = (str, length=0, char='') => {
  if (!isString(str) || !isNumber(length) || !isString(char)) return ''

  const delta = length - str.length
  if (delta <= 0) return str
  
  const pad = Array(delta).fill(char).join('') || ''
  return `${pad}${str}`
}

export default padStart