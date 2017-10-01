/**
 * Determines if given value is an object
 * @param {Any} value 
 * @return {Bool}
 */
const isObject = value =>
  value !== null 
  && typeof value === 'object'
  && !value.length

export default isObject