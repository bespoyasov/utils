import isString from '../types/isString'

/**
 * Removes html tags from given string
 * @param {String} str
 * @return {String}
 */
const clearHtmlTags = (str='') =>
  str.replace(/<\/?[^>]+(>|$)/g, '')

export default clearHtmlTags