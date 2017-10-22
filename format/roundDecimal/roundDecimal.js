import isNumber from '../../types/isNumber'

/**
 * Rounds decimal part of number
 * if arg is not a string returns 0
 * if arg has no point returns arg
 * @param {Number} num 
 * @return {Number}
 */
const roundDecimal = (num) => {
  if (!num || !isNumber(num)) return 0
  const str = num.toString()
  const shouldRound = str.indexOf('.') < str.length - 3
  
  return str.indexOf('.') > -1 
    ? shouldRound 
      ? +num.toFixed(2)
      : +str.substr(0, str.indexOf('.') + 3) 
    : num
}

export default roundDecimal