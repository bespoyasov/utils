import toClassProp from '../toClassProp'

/**
 * Determines if given value is an array
 * @param {Any} value 
 * @return {Bool}
 */
const isArray = value =>
  toClassProp(value) === 'array'

export default isArray