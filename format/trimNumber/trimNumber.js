import isNumber from '../../types/isNumber'

/**
 * Removes all the characters after 2nd char after point
 * doens't round fracion, just removes
 * if arg is not a string returns 0
 * if arg has no point returns arg
 * @param {Number} num 
 * @return {Number}
 */
const trimNumber = (num) => {
  if (!num || !isNumber(num)) return 0
  const str = num.toString()
  
  return str.indexOf('.') > -1 
    ? +str.substr(0, str.indexOf('.') + 3) 
    : num
}

export default trimNumber