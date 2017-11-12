import isNumber from '../../types/isNumber'

/**
 * Returns formatted time string in HH:MM format, doesn't include date
 * @param {Number} timestamp, ms
 * @param {Object} config
 * @return {String}
 */
const formatTime = (timestamp, config={}) => {
  if (!timestamp || !isNumber(timestamp)) return ''

  const padLeft = (n) => n < 10 ? `0${n}` : n

  const {seconds=false} = config

  const dateObj = new Date(timestamp)
  const hours = dateObj.getHours()
  const mins = dateObj.getMinutes()
  const hoursStr = padLeft(hours)
  const minsStr = padLeft(mins)

  let result = `${hoursStr}:${minsStr}`
  
  if (seconds) {
    const sec = dateObj.getSeconds()
    const secStr = padLeft(sec)
    result += `:${secStr}`
  }

  return result
}

export default formatTime