import isNumberOrString from '../types/isNumberOrString'

/**
 * Defines if given arguament is a mobile phone number
 * @param {String || Number} phone
 * @return {Bool}
 */
const isMobilePhone = phone => 
  !!phone
  && isNumberOrString(phone) 
  && str.replace(/\D/g, '').length === 11

export default isMobilePhone