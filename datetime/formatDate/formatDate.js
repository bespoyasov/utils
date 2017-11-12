import isNumber from '../../types/isNumber'

/**
 * Returns formatted date string, doesn't include time
 * default format: 1 dec 2017
 * @param {Number} timestamp, ms
 * @param {Object} config
 * @return {String}
 */
const formatDate = (timestamp, config={}) => {
  if (!timestamp || !isNumber(timestamp)) return ''

  const {
    months='jan feb mar apr may jun jul aug sept oct nov dec'.split(' '),
    padStart=false,
  } = config

  const dateObj = new Date(timestamp)
  const year = dateObj.getFullYear()
  const date = dateObj.getDate()
  const month = months[dateObj.getMonth()]

  const dateStr = padStart && date < 10 
    ? '0' + date 
    : date

  const monthStr = typeof month === 'number' && padStart && month < 10
    ? '0' + month
    : month

  return `${dateStr} ${monthStr} ${year}`
}

export default formatDate