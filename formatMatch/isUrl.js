/**
 * Defines if given value is an URL
 * @param {String} url 
 * @return {Bool}
 */
const isUrl = url =>
  !!url
  && isString(url)
  && url.indexOf('.') > -1

export default isUrl