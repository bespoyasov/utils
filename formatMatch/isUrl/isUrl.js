import isString from '../../types/isString'

/**
 * Determines if given value is an URL
 * @param {String} url 
 * @return {Bool}
 */
const isUrl = url =>
  !!url
  && isString(url)
  && url.indexOf('.') > 0
  && url.lastIndexOf('.') < url.length - 1

export default isUrl