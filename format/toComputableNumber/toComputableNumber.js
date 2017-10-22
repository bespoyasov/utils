import isNumericString from '../../types/isNumericString'

/**
 * Replaces coma in string with dot
 * @param {String} num 
 * @return {Number}
 */
const toComputableNumber = (num) =>
  !!num && isNumericString(num) 
    ? +num.replace(',', '.') 
    : 0

export default toComputableNumber