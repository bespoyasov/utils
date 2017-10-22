import isString from '../isString'

/**
 * Determines if given value is a numeric string
 * @param {String} value 
 * @return {Bool}
 */
const isNumericString = value =>
  isString(value) 
  && !isNaN(value.replace(',', '.'))

export default isNumericString