/**
 * Returns today's start timestamp, not UTC
 * @return {Number}
 */
const getTodayStartTime = () => {
  const date = new Date()
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)
  return date.getTime()
}

export default getTodayStartTime