import isNumber from '../../types/isNumber'
import formatDate from '../formatDate'
import formatTime from '../formatTime'

/**
 * Determines if given dates are equal,
 * by default checks only dates
 * @param {Number} ts1, ms
 * @param {Number} ts2, ms
 * @param {Object} config
 * @return {Bool}
 */
const isEqual = (ts1, ts2, config={}) => {
  if (!isNumber(ts1) || !isNumber(ts2)) return false

  const {by='date'} = config
  const options = {seconds: true}

  if (by === 'stamp') return ts1 === ts2

  const dateEqual = formatDate(ts1) === formatDate(ts2)
  if (by === 'date') return dateEqual

  const timeEqual = formatTime(ts1, options) === formatTime(ts2, options)
  if (by === 'time') return timeEqual

  return dateEqual && timeEqual
}

export default isEqual