import isNumberOrString from '../../types/isNumberOrString'

/**
 * Determines if given argument is a mobile phone number
 * @param {String || Number} phone
 * @return {Bool}
 */
const isMobilePhone = phone => 
  !!phone
  && isNumberOrString(phone) 
  && phone.toString().replace(/\D/g, '').length === 11
  && !/[a-zA-Zа-яА-ЯёЁ,.]+/.test(phone.toString())

export default isMobilePhone