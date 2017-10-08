import isString from '../../types/isString'

/**
 * Removes html tags from given string
 * @param {String} str
 * @return {String}
 */
const clearHtmlTags = (str='') =>
  isString(str)
  ? str.replace(/<\/?[^>]+(>|$)/g, '')
  : ''

export default clearHtmlTags