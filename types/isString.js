/**
 * Defines if given value is a string
 * @param {Any} value 
 * @return {Bool}
 */
const isString = value =>
  typeof value === 'string' 
  || value instanceof String

export default isString