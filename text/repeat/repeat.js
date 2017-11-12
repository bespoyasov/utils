import isString from '../../types/isString'
import isNumber from '../../types/isNumber'

/**
 * Returns string repeated 'n' times
 * @param {String} str 
 * @param {Number} n 
 * @return {String}
 */
const repeat = (str, n) =>
  isString(str) && isNumber(n)
    ? Array(n).fill(str).join('') || ''
    : ''

export default repeat