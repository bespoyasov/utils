/**
 * Remove all the punctuation from given string
 * @param {String} str
 * @return {String}
 */
const removePunctuation = str => 
  !!str
    && isNumberOrString(str)
    && str.toString().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    || ''

export default removePunctuation