import isNumber from '../../types/isNumber'

/**
 * Calculates the percent that first value represents relative to second
 * Returned value is rounded percent
 * @param {Number} first
 * @param {Number} second
 * @return {Number}
 */
export const calcPercent = (first, second) =>
  isNumber(first) && isNumber(second)
    ? Math.round(first * 100 / second)
    : 0

export default calcPercent