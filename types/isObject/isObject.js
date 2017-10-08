import toClassProp from '../toClassProp'

/**
 * Determines if given value is an object
 * @param {Any} value 
 * @return {Bool}
 */
const isObject = value =>
  toClassProp(value) === 'object'

export default isObject