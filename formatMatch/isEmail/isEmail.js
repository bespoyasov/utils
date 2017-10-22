import isString from '../../types/isString'

/**
 * Determines if given value is an email address
 * @param {String} email 
 * @return {Bool}
 */
const isEmail = email =>
  !!email 
  && isString(email) 
  && email.indexOf('@') > 0 
  && email.indexOf('.') > 0
  && email.lastIndexOf('.') < email.length - 1
  && email.lastIndexOf('.') > email.indexOf('@')

export default isEmail