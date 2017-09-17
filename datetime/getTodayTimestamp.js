/**
 * Returns today's start timestamp
 * @return {Number}
 */
const getTodayTimestamp = () => {
  const date = new Date()
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)
  return date.getTime()
}

export default getTodayTimestamp