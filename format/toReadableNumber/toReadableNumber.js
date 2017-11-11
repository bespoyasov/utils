import isNumber from '../../types/isNumber'

/**
 * Replaces dot in number with comma
 * @param {Number} num 
 * @return {String}
 */
const toReadableNumber = (num) => {
  if (!isNumber(num) || (!num && num !== 0)) return '0' 
  
  const str = num.toString()
  return str.lastIndexOf('.') < str.length - 1 
    ? str.replace('.', ',') 
    : ''
}

export default toReadableNumber