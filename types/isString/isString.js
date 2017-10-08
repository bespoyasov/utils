import toClassProp from '../toClassProp'

/**
 * Defines if given value is a string
 * @param {Any} value 
 * @return {Bool}
 */
const isString = value =>
  toClassProp(value) === 'string'

export default isString