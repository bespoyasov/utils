import isString from '../../types/isString'

/**
 * Removes every character from giver string except numbers, commas and points
 * returned value is a number with or without point
 * if given argument is not a string returns 0
 * @param {String} str 
 * @return {Number} 
 */
export const numericStringToNumber = (str='') => {
  if (!isString(str)) return 0

  let clean = str
    .replace(/[^0-9\.\,\-]/g, '')
    .replace(/\,/g, '.')
    .replace(/\.(?=.*\.)/, '')
    
  const pointIndex = clean.lastIndexOf('.')
  if (pointIndex === -1) return +clean

  const integer = str.substr(0, pointIndex).replace(/\D/g, '') || ''
  const fraction = str.substr(pointIndex + 1) || ''
  return +`${integer}.${fraction}`
}

export default numericStringToNumber