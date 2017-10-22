import isNumberOrString from '../../types/isNumberOrString'

/**
 * Converts phone-string to phone-number
 * @param {String} phone 
 * @param {Object} config 
 * @return {Number || 0}
 */
const phoneToNumber = (phone, config={}) => {
  return !!phone && isNumberOrString(phone)
    ? +phone.toString().replace(/\D/g, '')
    : 0
}

export default phoneToNumber