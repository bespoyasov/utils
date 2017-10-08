/**
 * Replaces dot in number with coma
 * @param {String} num 
 * @return {String}
 */
const toReadableNumber = (num) =>
  !!num
    && num.replace('.', ',')
    || ''

export default toReadableNumber