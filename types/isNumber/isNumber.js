import toClassProp from '../toClassProp'

/**
 * Defines if given value is a finite number
 * @param {Any} value 
 * @return {Bool}
 */
const isNumber = value =>
  toClassProp(value) === 'number'
  && isFinite(value)
  && !isNaN(value)

export default isNumber