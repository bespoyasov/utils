import isString from '../../types/isString'

/**
 * Remove all the punctuation from given string
 * @param {String} str
 * @return {String}
 */
const removePunctuation = str => 
  !!str && isString(str)
    ? str.replace(/[.,\/#\?!$%\^&\*;:{}\[\]=\-\+\<\>_`~()]/g, '')
    : ''

export default removePunctuation