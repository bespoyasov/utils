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

  const padLeft = (n) => n < 10 ? `0${n}` : n

  const {
    months='jan feb mar apr may jun jul aug sept oct nov dec'.split(' '),
    padStart=false,
  } = config

  const dateObj = new Date(timestamp)
  const year = dateObj.getFullYear()
  const date = dateObj.getDate()
  const month = months[dateObj.getMonth()]

  const dateStr = padStart 
    ? padLeft(date) 
    : date

  const monthStr = typeof month === 'number' && padStart 
    ? padLeft(month) 
    : month

  return `${dateStr} ${monthStr} ${year}`
}

export default formatDate