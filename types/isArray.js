/**
 * Determines if given value is an array
 * @param {Any} value 
 * @return {Bool}
 */
const isArray = value =>
  value !== null 
  && typeof value === 'object'
  && !!value.length

export default isArray