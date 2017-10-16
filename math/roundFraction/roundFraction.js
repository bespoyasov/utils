import isNumber from '../../types/isNumber'
import isObject from '../../types/isObject'

/**
 * Rounds fractions to given precision in config
 * @param {Number} value
 * @param {Object} config
 * @return {Number}
 */
export const roundFraction = (value, config={}) => {
  if (!isNumber(value) || !isObject(config)) return 0
  const {precision=2} = config
  return value !== 0 && value % 1 !== 0 
    ? +(value.toFixed(precision > 0 ? precision : 0))
    : value
}

export default roundFraction