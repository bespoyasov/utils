import isNumberOrString from '../../types/isNumberOrString'

/**
 * Removes all the whitespaces and converts to lower case
 * @param {String} str
 * @return {String}
 */
const stringToSearchable = str => 
  !!str && isNumberOrString(str)
    ? str
      .toString()
      .toLowerCase()
      .replace(/\s/g, '')
    : ''

export default stringToSearchable