import isString from '../types/isString'

/**
 * Defines if given value is an email address
 * @param {String} email 
 * @return {Bool}
 */
const isEmail = email =>
  !!email 
  && isString(email) 
  && email.indexOf('@') > -1 
  && email.indexOf('.') > -1
  && email.lastIndexOf('.') > email.indexOf('@')

export default isEmail