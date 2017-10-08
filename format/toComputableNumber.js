/**
 * Replaces coma in number with dot
 * @param {String} num 
 * @return {String}
 */
const toComputableNumber = (num) =>
  !!num 
    && num.replace(',', '.') 
    || ''

export default toComputableNumber