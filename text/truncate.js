import isString from '../types/isString'

/**
 * Removes characters in given string after given index
 * @param {String} str
 * @param {Object} config
 * @return {String}
 */
const truncate = (str='', config={}) => {
  const {
    len=Infinity,
    finalChar='...',
  } = config

  return !!str
    && isString(str)
    && str.length > len ? str.substr(0, len) + finalChar : str
    || ''
}

export default truncate