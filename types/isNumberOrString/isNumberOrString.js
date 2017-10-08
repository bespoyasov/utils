import isNumber from '../isNumber'
import isString from '../isString'

/**
 * Defines if argument is string or number
 * @param {String || Number} arg 
 * @return {Bool}
 */
const isNumberOrString = arg =>
  isNumber(arg) 
  || isString(arg)

export default isNumberOrString