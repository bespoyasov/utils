import isNumber from '../types/isNumber'
import isObject from '../types/isObject'

/**
 * Rounds fractions to given precision in config
 * @param {Number} value
 * @param {Object} config
 * @return {Number}
 */
export const roundFraction = (value=1, config={}) => {
  if (!isNumber(value) || !isObject(config)) return 0
  const {precision=2} = config
  return num !== 0 && num % 1 !== 0 
    ? +(num.toFixed(precision))
    : num
}

export default roundFraction